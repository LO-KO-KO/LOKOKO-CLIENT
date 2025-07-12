'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewModalLayout from './components/ReviewModalLayout';

const mediaList = [
  {
    mediaList: [
      {
        type: 'video' as const,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    user: { name: '김정은', avatarUrl: '' },
    date: '2025年07月01日',
    likeCount: 123,
  },
  {
    mediaList: [
      {
        type: 'video' as const,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    user: { name: '김정은', avatarUrl: '' },
    date: '2025年07月01日',
    likeCount: 123,
  },
  {
    mediaList: [
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
    ],
    user: { name: '권동희', avatarUrl: '' },
    date: '2025年07月01日',
    likeCount: 45,
  },
  {
    mediaList: [
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
    ],
    user: { name: '정희연', avatarUrl: '' },
    date: '2025年07月01日',
    likeCount: 454,
  },
];

export default function Page() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1.2}
      centeredSlides
      spaceBetween={-45}
      onSwiper={(swiper) => {
        const firstSlide = swiper.slides[0];
        if (firstSlide) {
          const videos = firstSlide.querySelectorAll<HTMLVideoElement>('video');
          videos.forEach((video) => {
            video.play();
          });
        }
      }}
      onSlideChange={(swiper) => {
        swiper.slides.forEach((slideEl, index) => {
          const videos = slideEl.querySelectorAll<HTMLVideoElement>('video');
          videos.forEach((video) => {
            if (index === swiper.activeIndex) {
              video.play();
            } else {
              video.pause();
            }
          });
        });
      }}
      className="inset-0 h-screen w-screen bg-black/70"
    >
      {mediaList.map((review, idx) => (
        <SwiperSlide
          key={idx}
          className="flex h-[55.2rem] items-center justify-center"
        >
          <ReviewModalLayout
            mediaList={review.mediaList}
            user={review.user}
            date={review.date}
            likeCount={review.likeCount}
          >
            {/* 우측 리뷰 내용 등 */}
            <div>리뷰 내용</div>
          </ReviewModalLayout>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
