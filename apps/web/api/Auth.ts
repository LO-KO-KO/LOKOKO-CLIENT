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
  ApiResponseLineLoginResponse,
  ApiResponseLoginUrlResponse,
  ApiResponseVoid,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags AUTH
   * @name ReissueRefreshToken
   * @summary RefreshToken 재발급
   * @request POST:/api/auth/refresh
   * @secure
   */
  reissueRefreshToken = (params: RequestParams = {}) =>
    this.request<ApiResponseVoid, any>({
      path: `/api/auth/refresh`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name GetLoginUrl
   * @summary 라인 로그인 URL 생성 (클라에서 호출)
   * @request GET:/api/auth/url
   * @secure
   */
  getLoginUrl = (params: RequestParams = {}) =>
    this.request<ApiResponseLoginUrlResponse, any>({
      path: `/api/auth/url`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name RedirectToLineAuth
   * @summary 라인 소셜 로그인, 리다이렉션
   * @request GET:/api/auth/line/redirect
   * @secure
   */
  redirectToLineAuth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/auth/line/redirect`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags AUTH
   * @name LineLogin
   * @summary 라인 소셜 로그인, JWT 토큰 발급 후 저장
   * @request GET:/api/auth/line/login
   * @secure
   */
  lineLogin = (
    query: {
      code: string;
      state: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ApiResponseLineLoginResponse, any>({
      path: `/api/auth/line/login`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
