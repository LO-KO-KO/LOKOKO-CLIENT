'use client';

import { SEARCH_OPTION } from 'constants/option';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';
import { SearchOption } from 'types/option';
import { isValidCategoryKey, isValidCategoryOption } from 'utils/category';
import { Suspense, useMemo, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  useProductSearch,
  useReviewVideoSearch,
  useReviewImageSearch,
  useCategoryProductSearch,
  useCategoryReviewVideoSearch,
  useCategoryReviewImageSearch,
} from '../../../hooks/use-product-api';
import OptionSelector from './components/option-selector';
import SearchBreadCrumbSection from './components/search-bread-crumb-section';
import SearchProductsSection from './components/search-products-section';
import SearchReviewSection from './components/search-reviews-section';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rawMiddle = searchParams.get('middleCategory') || '';
  const rawSub = searchParams.get('subCategory') || '';
  const rawSearchType = searchParams.get('searchType') || '';

  const middleCategory: CategoryNameEng | '' = isValidCategoryKey(rawMiddle)
    ? rawMiddle
    : '';
  const subCategory: CategoryOptionEng | '' =
    middleCategory && isValidCategoryOption(rawSub, middleCategory)
      ? rawSub
      : '';
  const keyword = searchParams.get('keyword') || '';
  const selectedTab: SearchOption = useMemo(() => {
    if (rawSearchType === 'REVIEW') return SEARCH_OPTION.REVIEW;
    return SEARCH_OPTION.PRODUCT;
  }, [rawSearchType]);

  // 검색바로 검색한 경우
  const {
    data: productSearchData,
    isLoading: isProductSearchLoading,
    isError: isProductSearchError,
  } = useProductSearch(
    keyword,
    0,
    8,
    !!keyword && selectedTab === SEARCH_OPTION.PRODUCT
  );

  const {
    data: reviewVideoSearchData,
    isLoading: isReviewVideoSearchLoading,
    isError: isReviewVideoSearchError,
  } = useReviewVideoSearch(
    keyword,
    0,
    8,
    !!keyword && selectedTab === SEARCH_OPTION.REVIEW
  );

  const {
    data: reviewImageSearchData,
    isLoading: isReviewImageSearchLoading,
    isError: isReviewImageSearchError,
  } = useReviewImageSearch(
    keyword,
    0,
    8,
    !!keyword && selectedTab === SEARCH_OPTION.REVIEW
  );

  // 카테고리로 검색한 경우
  const {
    data: categoryProductData,
    isLoading: isCategoryProductLoading,
    isError: isCategoryProductError,
  } = useCategoryProductSearch(
    middleCategory,
    subCategory,
    0,
    8,
    !!middleCategory && selectedTab === SEARCH_OPTION.PRODUCT
  );

  const {
    data: categoryReviewVideoData,
    isLoading: isCategoryReviewVideoLoading,
    isError: isCategoryReviewVideoError,
  } = useCategoryReviewVideoSearch(
    middleCategory,
    subCategory,
    0,
    8,
    !!middleCategory && selectedTab === SEARCH_OPTION.REVIEW
  );

  const {
    data: categoryReviewImageData,
    isLoading: isCategoryReviewImageLoading,
    isError: isCategoryReviewImageError,
  } = useCategoryReviewImageSearch(
    middleCategory,
    subCategory,
    0,
    8,
    !!middleCategory && selectedTab === SEARCH_OPTION.REVIEW
  );

  const productData = keyword
    ? productSearchData?.data
    : categoryProductData?.data;
  const reviewVideoData = keyword
    ? reviewVideoSearchData?.data
    : categoryReviewVideoData?.data;
  const reviewImageData = keyword
    ? reviewImageSearchData?.data
    : categoryReviewImageData?.data;

  const isLoading =
    (keyword &&
      (isProductSearchLoading ||
        isReviewVideoSearchLoading ||
        isReviewImageSearchLoading)) ||
    (!keyword &&
      (isCategoryProductLoading ||
        isCategoryReviewVideoLoading ||
        isCategoryReviewImageLoading));

  const hasError =
    (keyword &&
      (isProductSearchError ||
        isReviewVideoSearchError ||
        isReviewImageSearchError)) ||
    (!keyword &&
      (isCategoryProductError ||
        isCategoryReviewVideoError ||
        isCategoryReviewImageError));

  const handleClickTab = (option: SearchOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (option === SEARCH_OPTION.REVIEW) {
      params.set('searchType', 'REVIEW');
    } else {
      params.set('searchType', 'PRODUCT');
    }

    router.push(`/search?${params.toString()}`);
  };

  const tabRender = {
    [SEARCH_OPTION.PRODUCT]: (
      <SearchProductsSection products={(productData as any)?.products || []} />
    ),
    [SEARCH_OPTION.REVIEW]: (
      <SearchReviewSection
        reviewsVideo={(reviewVideoData as any)?.reviews || []}
        reviewsImage={(reviewImageData as any)?.reviews || []}
      />
    ),
  }[selectedTab];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (hasError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex flex-col items-start self-stretch"></div>
      <SearchBreadCrumbSection
        middleCategory={middleCategory}
        subCategory={subCategory}
      />
      <OptionSelector
        selectedTab={selectedTab}
        handleClickTab={handleClickTab}
      />
      {tabRender}
    </div>
  );
}
