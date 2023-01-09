import { BASE_URL, APP_ID } from './property';
import { AxiosIns } from './networkProvider';
import { AxiosError } from 'axios';
const axios = AxiosIns.getInstace();

export async function login(username: string, password: string): Promise<unknown> {
  const route = 'authentication/AUTHENTICATE';
  const result = await axios.post(BASE_URL + route, { username, password });
  return result;
}

export async function get(route: string, params?: object): Promise<any> {
  try {
    const res = await axios.get(BASE_URL + route, {
      params
    });
    return res;
  } catch (e) {
    const er = e as AxiosError;
    if (er && er.response) {
      return Promise.reject(er.response.status);
    }
  }
}
