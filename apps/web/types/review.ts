import { REVIEW_MEDIA_TYPE } from 'constants/review';

export type MediaType =
  (typeof REVIEW_MEDIA_TYPE)[keyof typeof REVIEW_MEDIA_TYPE];

export interface ReviewItem {
  type?: MediaType;
  ranking?: number;
  brandName: string;
  productName: string;
  reviewId: number;
  rating?: number;
  reviewCount?: number;
  likeCount: number;
  imageUrl?: string;
}
export interface ReviewFormData {
  productOptionId: number;
  rating: number;
  positiveComment: string;
  negativeComment: string;
  mediaFiles?: File[];
  receiptFile?: File;
}
