'use client';

import Modal from 'components/modal/modal';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@lococo/design-system';

export default function DeleteReviewModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const id = params.id as string;
  const reviewId = searchParams.get('reviewId');

  console.log(id, reviewId); // 추후에 없는 id나 reviewId로 접근했을 때 헨들링

  const handleDelete = async () => {
    try {
      console.log('삭제 API:', { productId: id, reviewId });
      router.back();
    } catch (error) {
      console.error('', error);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Modal className="w-[40rem]">
      <Modal.Header className="h-[4.8rem] font-[700]">
        <h1 className="en-body1">レビューを削除</h1>
      </Modal.Header>
      <Modal.Body className="h-[9.4rem] gap-[0.8rem] p-[1.6rem]">
        <p className="jp-title2 font-bold">レビューを削除しますか？</p>
        <p className="jp-caption3 text-gray-00 font-[400]">
          削除すると、このレビューは元に戻せません。
        </p>
      </Modal.Body>
      <Modal.Footer className="mb-[1.6rem] justify-center gap-[1.2rem]">
        <div className="flex gap-[1.2rem]">
          <Button
            color="secondary"
            variant="filled"
            size="lg"
            rounded={true}
            className="jp-title2 w-[17.8rem] text-pink-500"
            onClick={handleDelete}
          >
            削除
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="lg"
            rounded={true}
            className="jp-title2 w-[17.8rem] text-white"
            onClick={handleCancel}
          >
            キャンセル
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
