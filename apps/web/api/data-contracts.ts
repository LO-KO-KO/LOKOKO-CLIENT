/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ReviewRequest {
  /** @format int64 */
  productOptionId: number;
  /** @format int32 */
  rating: number;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  positiveComment: string;
  /**
   * @minLength 15
   * @maxLength 1500
   */
  negativeComment: string;
  mediaUrl?: string[];
  receiptUrl?: string[];
}

export interface ApiResponseReviewResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewResponse;
}

export interface ReviewResponse {
  /** @format int64 */
  reviewId?: number;
}

export interface ReviewReceiptRequest {
  mediaType: string;
}

export interface ApiResponseReviewReceiptResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewReceiptResponse;
}

export interface ReviewReceiptResponse {
  receiptUrl?: string[];
}

export interface ReviewMediaRequest {
  mediaType: string[];
}

export interface ApiResponseReviewMediaResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReviewMediaResponse;
}

export interface ReviewMediaResponse {
  mediaUrl?: string[];
}

export interface ApiResponseVoid {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: any;
}

export interface ApiResponseListVideoResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: VideoResponse[];
}

export interface VideoResponse {
  /** @format int64 */
  id?: number;
  topic?: string;
  title?: string;
  url?: string;
  /** @format int32 */
  popularity?: number;
  /** @format int64 */
  viewCount?: number;
  /** @format date-time */
  uploadedAt?: string;
}

export interface ApiResponseObject {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: any;
}

export interface ApiResponseProductDetailResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductDetailResponse;
}

export interface ProductDetailResponse {
  /** @format int64 */
  productId?: number;
  imageUrls?: string[];
  productOptions?: ProductOptionResponse[];
  productName?: string;
  brandName?: string;
  unit?: string;
  /** @format int64 */
  reviewCount?: number;
  /** @format double */
  rating?: number;
  /** @format int64 */
  normalPrice?: number;
  productDetail?: string;
  ingredients?: string;
  oliveYoungUrl?: string;
  q10Url?: string;
  middleCategory?: "FACIAL_CARE" | "FACE_MAKEUP" | "EYE_MAKEUP" | "LIP_MAKEUP";
  subCategory?:
    | "TONER"
    | "MOISTURIZER"
    | "ESSENCE_SERUM"
    | "CREAM"
    | "FOUNDATION"
    | "POWDER_COMPACT"
    | "CONCEALER"
    | "BLUSHER"
    | "EYEBROW"
    | "EYESHADOW"
    | "EYELINER"
    | "LIPSTICK"
    | "LIP_TINT";
}

export interface ProductOptionResponse {
  /** @format int64 */
  id?: number;
  optionName?: string;
}

export interface ApiResponseProductDetailYoutubeResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ProductDetailYoutubeResponse;
}

export interface ProductDetailYoutubeResponse {
  youtubeUrls?: string[];
}

export interface ApiResponseCategoryPopularProductResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CategoryPopularProductResponse;
}

export interface CategoryPopularProductResponse {
  searchQuery?: string;
  products?: ProductResponse[];
  pageInfo?: PageableResponse;
}

export interface PageableResponse {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  numberOfElements?: number;
  isLast?: boolean;
}

export interface ProductResponse {
  /** @format int64 */
  productId?: number;
  imageUrls?: string[];
  productName?: string;
  brandName?: string;
  unit?: string;
  /** @format int64 */
  reviewCount?: number;
  /** @format double */
  rating?: number;
  isLiked?: boolean;
}

export interface ApiResponseCategoryNewProductResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: CategoryNewProductResponse;
}

export interface CategoryNewProductResponse {
  searchQuery?: string;
  products?: ProductResponse[];
  pageInfo?: PageableResponse;
}

export interface ApiResponseLoginUrlResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: LoginUrlResponse;
}

export interface LoginUrlResponse {
  authorizationUrl?: string;
}

export interface ApiResponseLineLoginResponse {
  success?: boolean;
  /** @format int32 */
  status?: number;
  message?: string;
  data?: LineLoginResponse;
}

export interface LineLoginResponse {
  accessToken?: string;
  refreshToken?: string;
  loginStatus?: "LOGIN" | "REGISTER";
}
