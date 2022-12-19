import { AuthProvider } from 'react-admin';
import { login } from './httpClient';

// export const authProvider: AuthProvider = {
//   login: ({ username, password }) => {
//     return login(username, password);
//   },
//   checkError: (e) => {
//     const status = e.status;
//     if (status === 401 || status === 403) {
//       localStorage.removeItem('auth');
//       return Promise.reject();
//     }
//     // other error code (404, 500, etc): no need to log out
//     return Promise.resolve();
//   }
// };
