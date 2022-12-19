import { BASE_URL, APP_ID } from './property';
import { AxiosIns } from './networkProvider';
const axios = AxiosIns.getInstace();

export async function login(username: string, password: string): Promise<unknown> {
  const route = 'authentication/AUTHENTICATE';
  const result = await axios.post(BASE_URL + route, { username, password });
  return result;
}

export async function get(params: string, route: string) {
  const res = await axios.get(BASE_URL + route, {
    params
  });
  return res;
}
