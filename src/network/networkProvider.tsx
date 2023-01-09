import axios, { AxiosInstance } from 'axios';
import React, { ReactElement, useState } from 'react';
import { APP_ID, BASE_URL } from './property';

export class AxiosIns {
  private static instace: AxiosInstance;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstace(): AxiosInstance {
    if (!AxiosIns.instace) {
      AxiosIns.instace = axios.create({
        baseURL: BASE_URL,
        timeout: 1000,
        headers: { 'X-APPID': APP_ID, 'content-type': 'application/json', 'X-PACKETID': 1 }
      });
    }
    return AxiosIns.instace;
  }
}

type NetworkContextType = {
  instance: AxiosInstance;
  token: string;
  error: { loginError: string; networkError: string };
};

type NetworkContextProps = {
  networkState: NetworkContextType;
  updateToken: (token: string) => void;
  setError: (e: { loginError: string; networkError: string }) => void;
};

const NetworkContext = React.createContext<NetworkContextProps>({} as NetworkContextProps);

const NetworkContextProvider = (props: { children: JSX.Element | JSX.Element[] }): ReactElement => {
  const [state, setState] = useState<NetworkContextType>({
    instance: AxiosIns.getInstace(),
    error: { loginError: '', networkError: '' },
    token: ''
  });

  const updateToken = (token: string): void => {
    setState({ ...state, token });
  };

  const setError = (e: { loginError: string; networkError: string }): void => {
    setState({ ...state, error: e });
  };

  return (
    <NetworkContext.Provider
      value={{
        networkState: state,
        updateToken,
        setError
      }}>
      {props.children}
    </NetworkContext.Provider>
  );
};

export { NetworkContextProvider, NetworkContext };
