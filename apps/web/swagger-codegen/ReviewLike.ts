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

import { ApiResponseReviewLikeResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ReviewLike<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags REVIEW LIKE
   * @name ToggleLike
   * @summary 리뷰 좋아요 토글 (추가/취소)
   * @request POST:/api/likes/reviews/{reviewId}
   * @secure
   */
  toggleLike = (reviewId: number, params: RequestParams = {}) =>
    this.request<ApiResponseReviewLikeResponse, any>({
      path: `/api/likes/reviews/${reviewId}`,
      method: "POST",
      secure: true,
      ...params,
    });
}
