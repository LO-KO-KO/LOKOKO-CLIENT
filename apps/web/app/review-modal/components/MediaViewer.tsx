'use client';

import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress, SvgPlayArrow, SvgPause } from '@lococo/design-system';
import { IconButton } from '@lococo/design-system';
import { SvgArrowUp, SvgArrowDown } from '@/icons';

type Media = { type: 'video' | 'image'; url: string };
interface MediaViewerProps {
  mediaList: Media[];
}

export default function MediaViewer({ mediaList }: MediaViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [overlay, setOverlay] = useState<null | 'play' | 'pause'>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onTime = () => setProgress((vid.currentTime / vid.duration) * 100);
    vid.addEventListener('timeupdate', onTime);
    return () => {
      vid.removeEventListener('timeupdate', onTime);
    };
  }, [mediaList]);

  const handleVideoClick = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setOverlay('play');
      setTimeout(() => setOverlay(null), 300);
    } else {
      vid.pause();
      setOverlay('pause');
    }
  };

  const isImageType = mediaList.every((m) => m.type === 'image');
  const images = isImageType ? mediaList.slice(0, 5) : [];
  const navigationButtonClass =
    'border-1 size-[3.2rem] -rotate-90 border-gray-200 bg-white';

  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-l-xl bg-black">
      <Swiper
        direction="horizontal"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
        }}
        className="h-full w-full"
      >
        {mediaList.map((media, idx) => (
          <SwiperSlide key={idx}>
            {media.type === 'video' ? (
              <div className="relative h-full w-full">
                <video
                  ref={videoRef}
                  src={media.url}
                  controls={false}
                  muted
                  loop
                  playsInline
                  className="h-full w-full cursor-pointer object-cover"
                  onClick={handleVideoClick}
                />

                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${
                    overlay ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {overlay === 'play' ? (
                    <SvgPlayArrow className="size-[7.2rem] fill-white" />
                  ) : overlay === 'pause' ? (
                    <SvgPause className="size-[7.2rem] fill-white" />
                  ) : null}
                </div>

                <Progress
                  value={progress}
                  height="0.25rem"
                  className="absolute bottom-2 left-4 right-4 bg-gray-600"
                />
              </div>
            ) : (
              <Image
                src={media.url}
                alt="리뷰 이미지"
                fill
                className="relative h-full w-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {isImageType && images.length > 1 && currentIndex > 0 && (
        <div className="absolute left-[1.2rem] top-1/2 z-20 -translate-y-1/2">
          <IconButton
            icon={<SvgArrowUp />}
            rounded
            color="secondary"
            aria-label="이전 이미지"
            onClick={() => swiperRef.current?.slidePrev()}
            className={navigationButtonClass}
          />
        </div>
      )}

      {isImageType && images.length > 1 && currentIndex < images.length - 1 && (
        <div className="absolute right-[1.2rem] top-1/2 z-20 -translate-y-1/2">
          <IconButton
            icon={<SvgArrowDown />}
            rounded
            color="secondary"
            aria-label="다음 이미지"
            onClick={() => swiperRef.current?.slideNext()}
            className={navigationButtonClass}
          />
        </div>
      )}
    </div>
  );
}
