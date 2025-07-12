import { redirect } from 'next/navigation';

export default async function DeleteReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  redirect(`/product-detail/${id}`);
}
