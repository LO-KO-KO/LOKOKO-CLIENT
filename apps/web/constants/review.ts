export const REVIEW_TEXT_PLACEHOLDER = {
  POSITIVE: '使用してよかった点を教えてください。',
  NEGATIVE: '使用して気になった点を教えてください。',
} as const;

export const REVIEW_TEXT = {
  MAX_LENGTH: 1500,
  MIN_LENGTH: 15,
} as const;

export const REVIEW_TEXT_ERROR_MESSAGE = {
  MIN: (min: number) => `${min}文字以上で入力してください。`,
  MAX: (max: number) => `${max}文字以内で入力してください。`,
} as const;

export const REVIEW_MEDIA_MAX_COUNT = {
  IMAGE: 5,
  VIDEO: 1,
  RECEIPT: 1,
} as const;

export const REVIEW_MEDIA_ERROR_MESSAGE = {
  NOT_ALLOWED_FILE_TYPE: 'not allowed file type',
  CANNOT_UPLOAD_FILE: 'cannot upload file',
} as const;

export const REVIEW_MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
} as const;
