'use client';

import Modal from 'components/modal/modal';
import { useRouter } from 'next/navigation';
import { Button, IconButton } from '@lococo/design-system';
import { SvgClose } from '@/icons';
import {
  MediaUpload,
  NegativeReview,
  PositiveReview,
  ProductInfo,
  ProductOption,
  ProductRating,
  ReceiptCertification,
} from './components';
import { useReviewInput } from './hooks';

export default function WriteReviewModal() {
  const router = useRouter();

  const {
    formData,
    errors,
    reset,
    updateProductOption,
    updateRating,
    updatePositiveComment,
    updateNegativeComment,
    updateMediaFiles,
    updateReceiptFile,
    handleSubmit,
    isFormValid,
  } = useReviewInput(() => {
    alert('리뷰 제출에 성공했어요.');
    reset();
    router.back();
  });

  const handleClose = () => {
    router.back();
  };

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <Modal className="size-[70rem] rounded-[0.8rem]" onClose={handleClose}>
      <Modal.Header className="sticky top-0 flex justify-between">
        <h2 className="jp-body1 font-bold text-gray-800">レビューを書く</h2>
        <IconButton
          icon={<SvgClose />}
          size="sm"
          color="secondary"
          onClick={handleClose}
        />
      </Modal.Header>

      <Modal.Body className="scrollbar-hide overflow-y-scroll">
        <ProductInfo
          productName="テスト商品"
          imageUrl="https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU="
          brandName="テストブランド"
        />
        <div className="flex flex-col gap-[1.2rem] p-[1.6rem]">
          <ProductOption
            value={formData.productOptionId}
            onChange={updateProductOption}
            error={errors.productOptionId}
          />
          <ProductRating
            value={formData.rating}
            onChange={updateRating}
            error={errors.rating}
          />
          <PositiveReview
            value={formData.positiveComment}
            onChange={updatePositiveComment}
            error={errors.positiveComment}
          />
          <NegativeReview
            value={formData.negativeComment}
            onChange={updateNegativeComment}
            error={errors.negativeComment}
          />
          <ReceiptCertification
            file={formData.receiptFile}
            onChange={updateReceiptFile}
            error={errors.receiptFile}
          />
          <MediaUpload
            files={formData.mediaFiles}
            onChange={updateMediaFiles}
            error={errors.mediaFiles}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="px-[1.6rem] py-[1.2rem]">
        <Button
          variant="filled"
          size="lg"
          color="primary"
          className="jp-title2 w-full px-[1.6rem] py-[1.2rem]"
          rounded
          onClick={onSubmit}
          disabled={!isFormValid}
        >
          送信する
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
