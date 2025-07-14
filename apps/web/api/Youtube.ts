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

import { ApiResponseListVideoResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Youtube<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags YOUTUBE
   * @name GetPopularTrends
   * @summary 인기 뷰티 트렌드 영상 조회 (메인 페이지)
   * @request GET:/api/youtube/trends
   * @secure
   */
  getPopularTrends = (params: RequestParams = {}) =>
    this.request<ApiResponseListVideoResponse, any>({
      path: `/api/youtube/trends`,
      method: "GET",
      secure: true,
      ...params,
    });
}
