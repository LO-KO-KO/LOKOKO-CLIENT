/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ApiResponseReviewMediaResponse,
  ApiResponseReviewReceiptResponse,
  ApiResponseReviewResponse,
  ReviewMediaRequest,
  ReviewReceiptRequest,
  ReviewRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Review<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateReview
   * @summary 리뷰 작성
   * @request POST:/api/reviews/{productId}
   * @secure
   */
  createReview = (
    productId: number,
    data: ReviewRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewResponse, any>({
      path: `/api/reviews/${productId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateReceiptPresignedUrl
   * @summary 영수증 presignedUrl 발급
   * @request POST:/api/reviews/receipt
   * @secure
   */
  createReceiptPresignedUrl = (
    data: ReviewReceiptRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewReceiptResponse, any>({
      path: `/api/reviews/receipt`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags REVIEW
   * @name CreateMediaPresignedUrl
   * @summary 사진 또는 영상 presignedUrl 발급
   * @request POST:/api/reviews/media
   * @secure
   */
  createMediaPresignedUrl = (
    data: ReviewMediaRequest,
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseReviewMediaResponse, any>({
      path: `/api/reviews/media`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
