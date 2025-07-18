import { getUserStatus } from 'app/(with-layout)/(home)/utils/getUserStatus';
import { notFound } from 'next/navigation';
import { getProductDetail, getYoutubeList } from './apis';
import ClientPage from './page.client';

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const isUserLogin = await getUserStatus();

  let productDetailData;
  let youtubeListData;
  try {
    const productDetailResponse = await getProductDetail(Number(productId));
    const youtubeListResponse = await getYoutubeList(Number(productId));
    productDetailData = productDetailResponse;
    youtubeListData = youtubeListResponse;
  } catch {
    // TODO: 에러 핸들링 로직 추가
    throw new Error();
  }

  if (!productDetailData) {
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <ClientPage
      authStatus={isUserLogin}
      productData={productDetailData}
      youtubeListData={youtubeListData}
    />
  );
}
