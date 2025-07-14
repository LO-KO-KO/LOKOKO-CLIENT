'use client';

import { ProductResponse } from 'api/data-contracts';
import CardProduct from 'components/card/card-product';
import { ProductItem } from 'types/product';

export default function SearchProductsSection({
  products,
}: {
  products: ProductResponse[];
}) {
  console.log('SearchProductsSection 렌더링', products);
  const handleCardClick = (productId: number) => {
    console.log(`Card clicked: ${productId}`);
  };
  return (
    <section className="flex flex-col self-stretch p-[11.9rem] pb-[12rem] pt-[3.2rem]">
      <div className="mx-auto flex w-[112.8rem] flex-wrap content-center gap-[2.4rem]">
        {products.map((product) => (
          <CardProduct
            key={product.productId}
            brandName={product.brandName || ''}
            productName={product.productName || ''}
            unit={product.unit || ''}
            productId={product.productId || 0}
            isLiked={product.isLiked || false}
            rating={product.rating || 0}
            reviewCount={product.reviewCount || 0}
            imageUrl={product.imageUrls?.[0] || ''}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}
