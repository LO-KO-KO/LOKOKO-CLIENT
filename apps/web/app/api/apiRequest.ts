import { getCookie } from 'utils/cookie';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestProps {
  endPoint: string;
  method?: RequestMethod;
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}
const SERVER_API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

/**
 * 
 * @param endPoint 엔드포인트 작성 ex.'api/youtube/trends'
 * @param method api의 method ex.'GET', 'POST', 'DELETE'...
 * @param data api 호출 data field에 넣을 값
 * @param headers api header field에 넣을 값 ex. headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
 * @returns Promise<T>로 지정된 타입의 응답 데이터
 */
export const apiRequest = async <T = unknown>({
  endPoint,
  method = 'GET',
  data,
  headers,
  params,
}: ApiRequestProps): Promise<T> => {
  const accessToken = await getCookie('AccessToken');
  try {
    // 쿼리 파라미터가 있으면 URL에 추가
    let requestUrl = `${SERVER_API_BASE_URL}${endPoint}`;
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value);
        }
      });
      requestUrl += `?${searchParams.toString()}`;
    }

    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...headers,
    };

    const fetchOptions: RequestInit = {
      method,
      headers: defaultHeaders,
      credentials: 'include',
    };
    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }
    const response = await fetch(requestUrl, fetchOptions);
    const interceptedResponse = await responseInterceptor<T>(response, {
      endPoint,
      method,
      data,
      headers,
      params,
    });

    if (interceptedResponse) {
      return interceptedResponse as T;
    }

    if (!response.ok) {
      throw new Error();
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error();
  }
};

const refreshApi = async () => {
  // TODO HttpClient 인스턴스 활용하는 방식으로 수정
  const refreshResponse = await fetch(
    `${SERVER_API_BASE_URL}/api/auth/refresh`,
    {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return refreshResponse;
};

const responseInterceptor = async <T>(
  response: Response,
  originalRequest: ApiRequestProps
): Promise<T | null> => {
  if (response.status === 401) {
    const refreshResponse = await refreshApi();

    if (refreshResponse.ok) {
      const retryHeader: Record<string, string> = {
        'Content-Type': 'application/json',
        ...originalRequest.headers,
      };

      const fetchOptions: RequestInit = {
        method: originalRequest.method,
        headers: retryHeader,
        credentials: 'include',
      };

      if (originalRequest.data && originalRequest.method !== 'GET') {
        fetchOptions.body = JSON.stringify(originalRequest.data);
      }

      const retryResponse = await fetch(
        `${SERVER_API_BASE_URL}/${originalRequest.endPoint}`,
        fetchOptions
      );

      if (retryResponse.ok) {
        const retryData = await retryResponse.json();
        return retryData;
      } else {
        const retryError = await retryResponse.text();

        throw retryError;
      }
    }
  } else if (response.status === 403) {
    //TODO 서버측 api 연결되면 logout api 호출
    throw new Error('토큰이 만료됨');
  } else {
    return null;
  }
  return null;
};
