'use client';

import { useState } from 'react';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import ReviewOnboardingModal from 'app/review-modal/components/ReviewOnboardingModal';
import ReviewModalSwiper from 'app/review-modal/components/review-modal-swiper';
import {
  useAllImageReviewDetails,
  useImageReviews,
} from 'app/review-modal/hooks/review-api';
import { ReviewDetail } from 'app/review-modal/types';
import LoadingSvg from 'components/loading/loading-svg';
import {
  ApiResponseImageReviewDetailResponse,
  ImageReviewDetailResponse,
} from 'swagger-codegen/data-contracts';

const formatDateToJapanese = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
};

interface ImageReviewClientPageProps {
  userStatus: boolean;
}

export default function ClientPage({ userStatus }: ImageReviewClientPageProps) {
  const router = useRouter();
  const { reviewId: reviewIdParam } = useParams() as { reviewId: string };
  const currentReviewId = Number(reviewIdParam);
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const currentProductId = Number(productId);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  const {
    data: reviewsListResponse,
    isLoading: isListLoading,
    error: listError,
  } = useImageReviews(currentProductId || undefined);

  // 모든 리뷰의 상세 정보 가져오기
  const detailQueries = useAllImageReviewDetails(
    reviewsListResponse?.data?.imageReviews
  );

  if (isListLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }
  if (listError || !reviewsListResponse?.data) {
    return <div>리뷰 목록을 불러올 수 없습니다.</div>;
  }

  const reviews = reviewsListResponse.data.imageReviews;

  // 현재 리뷰의 인덱스 찾기
  const currentIndex = reviews.findIndex(
    (review) => review.reviewId === currentReviewId
  );
  if (currentIndex === -1) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  // 모든 상세 정보가 로딩 완료될 때까지 대기
  if (detailQueries.some((q) => q.isLoading)) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <LoadingSvg />
      </div>
    );
  }

  // 상세 정보를 ID로 매핑
  const detailMap = new Map<number, ImageReviewDetailResponse>();
  reviews.forEach((review, index) => {
    const dq = detailQueries[index];
    if (dq?.isSuccess && dq.data) {
      const response = dq.data as ApiResponseImageReviewDetailResponse;
      if (response.data) {
        detailMap.set(review.reviewId, response.data);
      }
    }
  });

  // 슬라이더에 넘길 리뷰 데이터 구성
  const allReviews: ReviewDetail[] = reviews
    // 1) detail이 존재하고 images가 한 개 이상인 리뷰만 걸러내고
    .filter((review) => {
      const detail = detailMap.get(review.reviewId);
      return !!detail && detail.images.length > 0;
    })
    // 2) 걸러진 리뷰들에 대해서만 ReviewDetail 객체 생성
    .map((review) => {
      const detail = detailMap.get(review.reviewId)!;
      return {
        reviewId: detail.reviewId,
        productId: detail.productId,
        writtenTime: formatDateToJapanese(detail.writtenTime),
        receiptUploaded: detail.receiptUploaded,
        positiveComment: detail.positiveComment,
        negativeComment: detail.negativeComment,
        authorName: detail.authorName,
        profileImageUrl: detail.profileImageUrl ?? null,
        rating: detail.rating,
        option: detail.option || '',
        likeCount: detail.likeCount,
        isLiked: detail.isLiked,
        brandName: detail.brandName,
        productName: detail.productName,
        productImageUrl: detail.productImageUrl,
        mediaList: detail.images.map((url, index) => ({
          id: index,
          type: 'image' as const,
          url,
        })),
      };
    });

  return (
    <>
      {isOnboardingOpen && (
        <ReviewOnboardingModal handleCloseOnboarding={handleCloseOnboarding} />
      )}
      <ReviewModalSwiper
        userStatus={userStatus}
        currentIndex={currentIndex}
        reviews={allReviews}
        onClose={() => router.back()}
      />
    </>
  );
}
