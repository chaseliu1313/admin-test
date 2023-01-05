import React, { ReactElement } from 'react';
import { Admin, Resource, ListGuesser, AuthProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AxiosIns, bearere, login } from '../network';
import { useToken } from '../hooks';
import { customTheme } from '../theme';
import LoginPage from '../page/login';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const MainContainer = (): ReactElement => {
  const { token, updateToken } = useToken();

  const authProvider: AuthProvider = {
    login: ({ username, password }) => {
      return login(username, password).then((res) => {
        if (typeof res === 'object' && res !== null) {
          const resObj = res as { data: { token: string } };
          if (resObj.data.token) {
            updateToken(resObj.data.token);

            //adding token using interceptors
            AxiosIns.getInstace().interceptors.request.use((req) => {
              console.log('req header', req.headers);
              const header = req.headers;

              if (header) {
                header.authorization = bearere + resObj.data.token;
              }
              return req;
            });
          }
        }
      });
    },
    checkError: (e) => {
      const status = e.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
    checkAuth: () => {
      if (token === '') return Promise.reject({ message: 'please login' });
      return Promise.resolve();
    },
    logout: () => {
      updateToken('');
      return Promise.resolve();
    },
    getIdentity: () => {
      //fetch user information or user information pass from login
      if (token === '') return Promise.reject({ message: 'please login' });
      return Promise.resolve({ id: 123, fullName: 'test' });
    },
    getPermissions: () => Promise.resolve()
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={customTheme}
        requireAuth>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </div>
  );
};

export default MainContainer;
