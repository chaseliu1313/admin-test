import axios from 'axios';
import { BASE_URL, APP_ID } from './property';

export async function login(username: string, password: string): Promise<unknown> {
  const route = 'authentication/AUTHENTICATE';
  const result = await axios.post(
    BASE_URL + route,
    { username, password },
    {
      headers: {
        'X-APPID': APP_ID,
        'content-type': 'application/json'
      }
    }
  );
  return result;
}

export async function get(params: string, route: string) {
  const res = await axios.get(BASE_URL + route, {
    params,
    headers: {
      'X-APPID': APP_ID,
      'content-type': 'application/json'
    }
  });
  return res;
}
