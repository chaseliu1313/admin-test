import React, { ReactElement } from 'react';
import { Admin, Resource, ListGuesser, Login, AuthProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import useCoreState from '../hooks/useCoreState';
import { login } from '../network';
import { CoreActionTypes } from '../context';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const MainContainer = (): ReactElement => {
  const { coreState, updateCoreState } = useCoreState();

  const authProvider: AuthProvider = {
    login: ({ username, password }) => {
      return login(username, password).then((res) => {
        if (typeof res === 'object' && res !== null) {
          const resObj = res as { data: { token: string } };
          if (resObj.data.token) {
            console.log(resObj.data.token);
            updateCoreState({
              type: CoreActionTypes.SET_USER,
              payload: { ...coreState, token: resObj.data.token }
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
      if (coreState.token === '') return Promise.reject({ message: 'please login' });
      return Promise.resolve();
    },
    logout: () => {
      updateCoreState({ type: CoreActionTypes.SET_USER, payload: { ...coreState, token: '' } });
      return Promise.resolve();
    },
    getIdentity: () => {
      //fetch user information or user information pass from login
      if (coreState.token === '') return Promise.reject({ message: 'please login' });
      return Promise.resolve({ id: 123, fullName: 'test' });
    },
    getPermissions: () => Promise.resolve()
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </div>
  );
};

export default MainContainer;
