import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { productApi } from 'api/client';
import { PRODUCT_KEYS, REVIEW_KEYS } from '../constants/query-key';

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
      productApi
        .search({
          keyword,
          searchType: 'PRODUCT',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),
    enabled: enabled && !!keyword.trim(),
    staleTime: 5 * 60 * 1000,
    retry: 1, // 재시도 횟수를 1회로 제한
    retryDelay: 1000, // 재시도 간격 1초
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
      productApi
        .search({
          keyword,
          searchType: 'REVIEW',
          mediaType: 'VIDEO',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),

    enabled: enabled && !!keyword.trim(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    retryDelay: 1000,
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
      productApi
        .search({
          keyword,
          searchType: 'REVIEW',
          mediaType: 'IMAGE',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),
    enabled: enabled && !!keyword.trim(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    retryDelay: 1000,
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
      productApi
        .searchProductsByCategory({
          middleCategory: middleCategory as any,
          subCategory: subCategory as any,
          searchType: 'PRODUCT',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),
    enabled: enabled && !!middleCategory,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    retryDelay: 1000,
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
      productApi
        .searchProductsByCategory({
          middleCategory: middleCategory as any,
          subCategory: subCategory as any,
          searchType: 'REVIEW',
          mediaType: 'VIDEO',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),
    enabled: enabled && !!middleCategory,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    retryDelay: 1000,
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
      productApi
        .searchProductsByCategory({
          middleCategory: middleCategory as any,
          subCategory: subCategory as any,
          searchType: 'REVIEW',
          mediaType: 'IMAGE',
          page,
          size,
        })
        .then((res) => {
          return res.json();
        }),
    enabled: enabled && !!middleCategory,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    retryDelay: 1000,
  });
};
