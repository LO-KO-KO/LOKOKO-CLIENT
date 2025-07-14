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

import { ApiResponseVoid } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Admin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ADMIN
   * @name DeleteReviewByAdmin
   * @summary 어드민 리뷰 삭제
   * @request DELETE:/api/admin/reviews/{reviewId}
   * @secure
   */
  deleteReviewByAdmin = (
    reviewId: number,
    query: {
      /** @format int64 */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/admin/reviews/${reviewId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
}
