'use client';

import { PropsWithChildren } from 'react';

import Image from 'next/image';

import { cva } from 'class-variance-authority';
import { ReviewItem } from 'types/review';

import { Badge } from '@lococo/design-system/badge';
import { SvgGoodFill } from '@lococo/icons';

import { cn } from '../../../../packages/design-system/src/lib/utils';

const imageWrapperVariant = cva(
  'relative border-[0.1rem] border-gray-200 flex items-center justify-center',
  {
    variants: {
      type: {
        video: 'w-[26.4rem] h-[35.2rem]',
        image: 'w-[26.4rem] h-[26.4rem]',
      },
    },
  }
);

interface CardReviewProps extends ReviewItem, PropsWithChildren {
  handleCardClick?: (reviewId: number) => void;
}

/**
 * 리뷰 카드 컴포넌트
 *
 * @param type image와 video 리뷰의 사이즈가 다르기 때문에 구분하기 위한 type(default = 'image')
 * @param ranking (optional) Card에서 뱃지에 나타낼 순위를 나타내는 props, {...(inRange(rank, 1, 3) && { rank: rank })}와 같이 사용하여 불필요할 시 넣지 않으면 됨
 * @param brandName 리뷰 상품의 브랜드명
 * @param productName 리뷰 상품의 상품명
 * @param reviewId 해당 리뷰의 고유한 ID
 * @param likeCount 해당 리뷰의 좋아요 수
 * @param mediaUrl 해당 리뷰 대표 이미지(영상 썸네일)
 * @param handleCardClick 리뷰 카드 클릭시 작동할 이벤트(reviewId 필요)
 * @param children (optional) 리뷰 카드 밑에 렌더링할 요소들(ex. 바로가기 버튼)
 */
export default function CardReview({
  type = 'image',
  ranking,
  brandName,
  productName,
  reviewId,
  likeCount,
  mediaUrl,
  handleCardClick,
  children,
}: CardReviewProps) {
  return (
    <article
      className="flex w-[26.4rem] cursor-pointer flex-col"
      onClick={() => handleCardClick?.(reviewId)}
    >
      <div className={cn(imageWrapperVariant({ type }), `bg-gray-500`)}>
        {mediaUrl ? (
          type === 'video' ? (
            <video
              width={264}
              height={352}
              src={mediaUrl}
              className="h-full w-full object-cover"
              preload="metadata"
            />
          ) : (
            <Image
              width={264}
              height={264}
              src={mediaUrl}
              alt={productName}
              className="h-full w-full object-cover"
            />
          )
        ) : (
          <p className="text-sm">
            {type === 'video' ? '영상 준비중' : '이미지 준비중'}
          </p>
        )}
        {ranking && <Badge rank={ranking} />}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[1rem] bg-gradient-to-t from-black/60 to-transparent px-[1.6rem] py-[1.2rem]">
          <div className="flex-1">
            <p
              className="en-title2 truncate font-bold text-white"
              title={brandName}
            >
              {brandName}
            </p>
            <p
              className="jp-body2 truncate font-medium text-white"
              title={productName}
            >
              {productName}
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-[0.8rem]">
            <SvgGoodFill size={24} className="fill-white" />
            <p className="en-body1 font-medium text-white">{likeCount}</p>
          </div>
        </div>
      </div>
      {children}
    </article>
  );
}
