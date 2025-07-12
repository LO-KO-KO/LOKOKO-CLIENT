import { redirect } from 'next/navigation';

interface WriteReviewPageProps {
  params: Promise<{ id: string }>;
}

export default async function WriteReviewPage({
  params,
}: WriteReviewPageProps) {
  const { id } = await params;

  redirect(`/product-detail/${id}`);
}
