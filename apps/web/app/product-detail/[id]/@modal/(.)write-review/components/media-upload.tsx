'use client';

import ContentWithLabel from 'components/input/content-with-label';
import { REVIEW_MEDIA_MAX_COUNT, REVIEW_MEDIA_TYPE } from 'constants/review';
import { MediaType } from 'types/review';
import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { ErrorNotice } from '@/components';
import { SvgAdd, SvgClose } from '@/icons';
import {
  ALLOWED_IMAGE_TYPES,
  ALLOWED_MEDIA_TYPES,
  ALLOWED_VIDEO_TYPES,
  isImageFile,
  isVideoFile,
} from '../hooks/useFileUploader';

interface MediaUploadProps {
  files: File[];
  onChange: (files: File[]) => void;
  error?: string;
}

const getFileType = (file: File): MediaType | undefined => {
  if (isImageFile(file)) return REVIEW_MEDIA_TYPE.IMAGE;
  if (isVideoFile(file)) return REVIEW_MEDIA_TYPE.VIDEO;
  return;
};

export default function MediaUpload({
  files,
  onChange,
  error,
}: MediaUploadProps) {
  const [objectUrls, setObjectUrls] = useState<string[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onChange([...files, selectedFile]);
    }
    e.target.value = '';
  };

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    onChange(updatedFiles);
  };

  const currentFileType = files[0] && getFileType(files[0]);
  const canAdd = currentFileType
    ? files.length <
      (currentFileType === REVIEW_MEDIA_TYPE.IMAGE
        ? REVIEW_MEDIA_MAX_COUNT.IMAGE
        : REVIEW_MEDIA_MAX_COUNT.VIDEO)
    : true;

  const getAcceptAttribute = () => {
    switch (currentFileType) {
      case REVIEW_MEDIA_TYPE.IMAGE:
        return ALLOWED_IMAGE_TYPES.join(', ');
      case REVIEW_MEDIA_TYPE.VIDEO:
        return ALLOWED_VIDEO_TYPES.join(', ');
      default:
        return ALLOWED_MEDIA_TYPES.join(', ');
    }
  };

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setObjectUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  return (
    <ContentWithLabel
      label="写真または動画をアップロードしてください"
      className="flex-col gap-[2.4rem] border-b border-gray-400"
    >
      <div className="flex flex-wrap gap-4">
        {files.map((file, index) => (
          <div key={index} className="relative h-32 w-32">
            {objectUrls[index] &&
              (getFileType(file) === REVIEW_MEDIA_TYPE.IMAGE ? (
                <Image
                  src={objectUrls[index]}
                  alt={`${index} review image`}
                  className="h-full w-full rounded object-cover"
                  width={80}
                  height={80}
                />
              ) : (
                <video
                  src={objectUrls[index]}
                  className="h-full w-full rounded object-cover"
                  controls={false}
                  muted
                />
              ))}
            <button
              onClick={() => removeFile(index)}
              className="absolute bottom-[0.4rem] right-[0.4rem] flex size-[1.8rem] items-center justify-center rounded-[0.2px] bg-black/30 p-[0.1rem]"
              type="button"
            >
              <SvgClose className="size-[1.6rem] fill-white" />
            </button>
          </div>
        ))}

        {canAdd && (
          <div className="relative">
            <input
              type="file"
              accept={getAcceptAttribute()}
              className="flex aspect-square w-32 cursor-pointer items-center justify-center bg-gray-800 p-[2.2rem] opacity-0"
              onChange={handleFileChange}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded bg-gray-800">
              <SvgAdd className="aspect-square size-[3.6rem] shrink-0 fill-white" />
            </div>
          </div>
        )}
      </div>
      {error && <ErrorNotice message={error} />}
    </ContentWithLabel>
  );
}
