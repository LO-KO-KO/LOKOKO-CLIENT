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

export class ProductLike<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags PRODUCT LIKE
   * @name ToggleLike
   * @summary 상품 좋아요 토글 (추가/취소)
   * @request POST:/api/likes/products/{productId}
   * @secure
   */
  toggleLike = (productId: number, params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/likes/products/${productId}`,
      method: "POST",
      secure: true,
      ...params,
    });
}
