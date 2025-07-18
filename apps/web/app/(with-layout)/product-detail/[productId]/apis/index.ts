import { apiRequest } from 'app/api/apiRequest';
import { ProductDetailResponse } from '../types';
import { ProductDetailData } from '../types';
import { YoutubeListResponse } from '../types';
import { YoutubeListData } from '../types';
import { ImageReviewDetailDataList } from '../types';
import { ImageReviewListResponse } from '../types';
import { ReviewLikeResponse } from '../types';
import { ReviewLikeData } from '../types';
import { ReviewDeleteResponse } from '../types';
import { ReviewDeleteData } from '../types';
import { UserUploadedVideoListResponse } from '../types';
import { UserUploadedVideoListData } from '../types';

/**
 * 상품 상세 정보를 가져오는 API 함수
 * @param productId 상품 ID
 * @returns Promise<ProductDetailResponse>
 */
export const getProductDetail = async (
  productId: number
): Promise<ProductDetailData> => {
  const response = await apiRequest<ProductDetailResponse>({
    endPoint: `/api/products/details/${productId}`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('상품 정보를 가져올 수 없습니다.');
  }

  return response.data;
};

export const getYoutubeList = async (
  productId: number
): Promise<YoutubeListData> => {
  const response = await apiRequest<YoutubeListResponse>({
    endPoint: `/api/products/details/${productId}/youtube`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('유튜브 정보를 가져올 수 없습니다.');
  }

  return response.data;
};

export const getReviewList = async (
  productId: number
): Promise<ImageReviewDetailDataList> => {
  const response = await apiRequest<ImageReviewListResponse>({
    endPoint: `/api/reviews/details/image?productId=${productId}&page=0&size=100`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error();
  }

  return response.data;
};

export const postReviewLike = async (
  reviewId: number
): Promise<ReviewLikeData> => {
  const response = await apiRequest<ReviewLikeResponse>({
    endPoint: `/api/likes/reviews/${reviewId}`,
    method: 'POST',
  });

  if (!response.data) {
    throw new Error();
  }

  return response.data;
};

export const deleteReview = async (
  reviewId: number
): Promise<ReviewDeleteData> => {
  const response = await apiRequest<ReviewDeleteResponse>({
    endPoint: `/api/reviews/${reviewId}`,
    method: 'DELETE',
  });

  if (!response.data) {
    throw new Error();
  }
  return response.data;
};

export const getUserUploadedVideoList = async (
  productId: number
): Promise<UserUploadedVideoListData> => {
  const response = await apiRequest<UserUploadedVideoListResponse>({
    endPoint: `/api/reviews/details/video?productId=${productId}`,
    method: 'GET',
  });

  if (!response.data) {
    throw new Error();
  }

  return response.data;
};
