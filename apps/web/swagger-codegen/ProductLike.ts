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

import { ApiResponseToggleLikeResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ProductLike<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PRODUCT LIKE
   * @name ToggleLike1
   * @summary 상품 좋아요 토글 (추가/취소)
   * @request POST:/api/likes/products/{productId}
   * @secure
   */
  toggleLike1 = (productId: number, params: RequestParams = {}) =>
    this.request<ApiResponseToggleLikeResponse, any>({
      path: `/api/likes/products/${productId}`,
      method: "POST",
      secure: true,
      ...params,
    });
}
