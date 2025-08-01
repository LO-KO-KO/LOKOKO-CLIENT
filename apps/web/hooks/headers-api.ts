import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from 'app/api/api-response';
import { apiRequest } from 'app/api/apiRequest';
import { ProductSearchResponse } from 'app/api/product-response';
import { ApiReviewSearchResponse } from 'app/api/review-response';

import { PRODUCT_KEYS, REVIEW_KEYS } from '../constants/query-key';

// 검색바로 검색할 때 사용하는 쿼리
export const useProductSearch = (
  keyword: string,
  page: number = 0,
  size: number = 8,
  enabled: boolean = true
) => {
  return useQuery<ApiResponse<ProductSearchResponse>>({
    queryKey: [...PRODUCT_KEYS.PRODUCT_LIST({ page, size }), 'search', keyword],
    queryFn: () =>
      apiRequest<ApiResponse<ProductSearchResponse>>({
        endPoint: '/api/products/search',
        method: 'GET',
        params: {
          keyword: keyword,
          searchType: 'PRODUCT',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
  });
};

export const useReviewSearch = (
  keyword: string,
  mediaType: 'VIDEO' | 'IMAGE',
  page: number = 0,
  size: number = 8,
  enabled: boolean = true
) => {
  const queryKey =
    mediaType === 'VIDEO'
      ? REVIEW_KEYS.VIDEO_LIST({ page, size })
      : REVIEW_KEYS.IMAGE_LIST({ page, size });

  return useQuery<ApiResponse<ApiReviewSearchResponse>>({
    queryKey: [...queryKey, 'search', keyword],
    queryFn: () =>
      apiRequest<ApiResponse<ApiReviewSearchResponse>>({
        endPoint: '/api/products/search',
        method: 'GET',
        params: {
          keyword,
          searchType: 'REVIEW',
          mediaType,
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
  });
};

// 카테고리별 상품 검색
export const useCategoryProductSearch = (
  middleCategory: string,
  subCategory?: string,
  page: number = 0,
  size: number = 8,
  enabled: boolean = true
) => {
  return useQuery<ApiResponse<ProductSearchResponse>>({
    queryKey: [
      ...PRODUCT_KEYS.PRODUCT_LIST({ page, size }),
      'category',
      middleCategory,
      subCategory,
    ],
    queryFn: () =>
      apiRequest<ApiResponse<ProductSearchResponse>>({
        endPoint: '/api/products/categories/search',
        method: 'GET',
        params: {
          middleCategory,
          ...(subCategory && { subCategory }),
          searchType: 'PRODUCT',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!middleCategory,
  });
};

// 카테고리별 리뷰 검색
export const useCategoryReviewSearch = (
  middleCategory: string,
  mediaType: 'VIDEO' | 'IMAGE',
  subCategory?: string,
  page: number = 0,
  size: number = 8,
  enabled: boolean = true
) => {
  return useQuery<ApiResponse<ApiReviewSearchResponse>>({
    queryKey: [
      ...REVIEW_KEYS[mediaType === 'VIDEO' ? 'VIDEO_LIST' : 'IMAGE_LIST']({
        page,
        size,
      }),
      'category',
      middleCategory,
      subCategory,
      mediaType,
    ],
    queryFn: () =>
      apiRequest<ApiResponse<ApiReviewSearchResponse>>({
        endPoint: '/api/products/categories/search',
        method: 'GET',
        params: {
          middleCategory,
          ...(subCategory && { subCategory }),
          searchType: 'REVIEW',
          mediaType,
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!middleCategory,
  });
};
