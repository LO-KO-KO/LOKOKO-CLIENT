import { getCookie } from 'utils/cookie';

export async function getUserStatus() {
  const isUserAccessToken = await getCookie('AccessToken');
  if (isUserAccessToken) {
    return true;
  } else {
    throw new Error();
  }
}
