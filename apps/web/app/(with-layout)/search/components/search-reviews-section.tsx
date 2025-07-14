'use client';

import CardReview from 'components/card/card-review';
import { ReviewItem } from 'types/review';

interface SearchReviewSectionProps {
  reviewsVideo: ReviewItem[];
  reviewsImage: ReviewItem[];
}

export default function SearchReviewSection({
  reviewsVideo,
  reviewsImage,
}: SearchReviewSectionProps) {
  const handleCardClick = (reviewId: number) => {
    console.log(reviewId);
  };
  return (
    <section className="flex flex-col content-center self-stretch px-[11.9rem] pb-[12rem] pt-0">
      <div className="mx-auto flex w-[112.8rem] flex-col items-start gap-[3.2rem] self-stretch pt-[3.2rem]">
        <p className="jp-head3 font-bold text-gray-700">動画レビュー</p>
        <div className="flex flex-wrap content-center items-center gap-[2.4rem] self-stretch">
          {reviewsVideo.map((review) => (
            <CardReview
              key={review.reviewId}
              type="video"
              brandName={review.brandName}
              productName={review.productName}
              reviewId={review.reviewId}
              likeCount={review.likeCount}
              imageUrl={review.imageUrl}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-[112.8rem] flex-col gap-[3.2rem] self-stretch pt-[3.2rem]">
        <p className="jp-head3 font-bold text-gray-700"> 写真付きレビュー</p>
        <div className="flex flex-wrap content-center items-center gap-[2.4rem] self-stretch">
          {reviewsImage.map((review) => (
            <CardReview
              key={review.reviewId}
              type="image"
              brandName={review.brandName}
              productName={review.productName}
              reviewId={review.reviewId}
              likeCount={review.likeCount}
              imageUrl={review.imageUrl}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
