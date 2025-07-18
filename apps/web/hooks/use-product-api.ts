import { useQuery } from '@tanstack/react-query';
import { apiRequest } from 'app/api/apiRequest';
import { PRODUCT_KEYS, REVIEW_KEYS } from '../constants/query-key';
import { ProductItem } from '../types/product';
import { ReviewItem } from '../types/review';

// 검색바로 검색할 때 사용하는 쿼리
export const useProductSearch = (
  keyword: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: PRODUCT_KEYS.PRODUCT_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ProductItem[]>({
        endPoint: '/api/products/search',
        method: 'GET',
        params: {
          keyword,
          searchType: 'PRODUCT',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
  });
};

// 리뷰 검색 (비디오)
export const useReviewVideoSearch = (
  keyword: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: REVIEW_KEYS.VIDEO_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ReviewItem[]>({
        endPoint: '/api/products/search',
        method: 'GET',
        params: {
          keyword,
          searchType: 'REVIEW',
          mediaType: 'VIDEO',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
    staleTime: 5 * 60 * 1000,
  });
};

// 리뷰 검색 (이미지)
export const useReviewImageSearch = (
  keyword: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: REVIEW_KEYS.IMAGE_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ReviewItem[]>({
        endPoint: '/api/products/search',
        method: 'GET',
        params: {
          keyword,
          searchType: 'REVIEW',
          mediaType: 'IMAGE',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!keyword.trim(),
    staleTime: 5 * 60 * 1000,
  });
};

// 카테고리별 상품 검색
export const useCategoryProductSearch = (
  middleCategory: string,
  subCategory?: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: PRODUCT_KEYS.PRODUCT_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ProductItem[]>({
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
    staleTime: 5 * 60 * 1000,
  });
};

// 카테고리별 리뷰 검색 (비디오)
export const useCategoryReviewVideoSearch = (
  middleCategory: string,
  subCategory?: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: REVIEW_KEYS.VIDEO_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ReviewItem[]>({
        endPoint: '/api/products/categories/search',
        method: 'GET',
        params: {
          middleCategory,
          ...(subCategory && { subCategory }),
          searchType: 'REVIEW',
          mediaType: 'VIDEO',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!middleCategory,
    staleTime: 5 * 60 * 1000,
  });
};

// 카테고리별 리뷰 검색 (이미지)
export const useCategoryReviewImageSearch = (
  middleCategory: string,
  subCategory?: string,
  page: number = 0,
  size: number = 10,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: REVIEW_KEYS.IMAGE_LIST({ page, size }),
    queryFn: () =>
      apiRequest<ReviewItem[]>({
        endPoint: '/api/products/categories/search',
        method: 'GET',
        params: {
          middleCategory,
          ...(subCategory && { subCategory }),
          searchType: 'REVIEW',
          mediaType: 'IMAGE',
          page: page.toString(),
          size: size.toString(),
        },
      }),
    enabled: enabled && !!middleCategory,
    staleTime: 5 * 60 * 1000,
  });
};
