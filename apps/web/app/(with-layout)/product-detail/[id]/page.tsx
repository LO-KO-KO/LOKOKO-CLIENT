import Link from 'next/link';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const reviewId = 5;

  return (
    <div>
      <h1>상품 상세 페이지 - ID: {id}</h1>

      <Link href={`/product-detail/${id}/delete-review?reviewId=${reviewId}`}>
        리뷰 삭제
      </Link>
    </div>
  );
}
