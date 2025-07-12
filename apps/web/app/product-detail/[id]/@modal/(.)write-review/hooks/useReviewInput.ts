'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { REVIEW_TEXT, REVIEW_TEXT_ERROR_MESSAGE } from 'constants/review';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
  ALLOWED_IMAGE_TYPES,
  createFileTypeValidator,
  mediaFilesValidator,
} from './useFileUploader';

const textCommentSchema = z
  .string()
  .min(
    REVIEW_TEXT.MIN_LENGTH,
    REVIEW_TEXT_ERROR_MESSAGE.MIN(REVIEW_TEXT.MIN_LENGTH)
  )
  .max(
    REVIEW_TEXT.MAX_LENGTH,
    REVIEW_TEXT_ERROR_MESSAGE.MAX(REVIEW_TEXT.MAX_LENGTH)
  );

const reviewSchema = z.object({
  productOptionId: z.number().min(1, 'product option is required'),
  rating: z.number().min(1, 'rating is required').max(5),
  positiveComment: textCommentSchema,
  negativeComment: textCommentSchema,
  mediaFiles: mediaFilesValidator.optional(),
  receiptFile: createFileTypeValidator(ALLOWED_IMAGE_TYPES).optional(),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export const useReviewInput = (onSuccess?: () => void) => {
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      productOptionId: 0,
      rating: 0,
      positiveComment: '',
      negativeComment: '',
      mediaFiles: undefined,
      receiptFile: undefined,
    },
    mode: 'onChange',
  });

  const formData = watch();

  const updateProductOption = (optionId: number) => {
    setValue('productOptionId', optionId, { shouldValidate: true });
  };

  const updateRating = (rating: number) => {
    setValue('rating', rating, { shouldValidate: true });
  };

  const updatePositiveComment = (comment: string) => {
    setValue('positiveComment', comment, { shouldValidate: true });
  };

  const updateNegativeComment = (comment: string) => {
    setValue('negativeComment', comment, { shouldValidate: true });
  };

  const updateMediaFiles = (files: File[]) => {
    setValue('mediaFiles', files, { shouldValidate: true });
  };

  const updateReceiptFile = (file: File | undefined) => {
    setValue('receiptFile', file, { shouldValidate: true });
  };

  const onSubmit = async (data: ReviewFormData) => {
    try {
      console.log('submit:', data);
      onSuccess?.();
    } catch (error) {
      console.error('failed:', error);
    }
  };

  const compatibleFormData = {
    productOptionId: formData.productOptionId,
    rating: formData.rating,
    positiveComment: formData.positiveComment,
    negativeComment: formData.negativeComment,
    mediaFiles: formData.mediaFiles || [],
    receiptFile: formData.receiptFile,
  };

  const compatibleErrors = {
    productOptionId: errors.productOptionId?.message,
    rating: errors.rating?.message,
    positiveComment: errors.positiveComment?.message,
    negativeComment: errors.negativeComment?.message,
    mediaFiles: errors.mediaFiles?.message,
    receiptFile: errors.receiptFile?.message,
  };

  return {
    formData: compatibleFormData,
    errors: compatibleErrors,
    reset,
    updateProductOption,
    updateRating,
    updatePositiveComment,
    updateNegativeComment,
    updateMediaFiles,
    updateReceiptFile,
    handleSubmit: () => handleSubmit(onSubmit)(),
    isFormValid: isValid,
  };
};
