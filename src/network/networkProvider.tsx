import axios, { AxiosInstance } from 'axios';
import React, { ReactElement, useState } from 'react';
import { APP_ID, BASE_URL } from './property';

export class AxiosIns {
  private static instace: AxiosInstance;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstace(): AxiosInstance {
    if (!AxiosIns.instace) {
      console.log('new instance');
      AxiosIns.instace = axios.create({
        baseURL: BASE_URL,
        timeout: 1000,
        headers: { 'X-APPID': APP_ID, 'content-type': 'application/json' }
      });
    } else {
      console.log('old instance');
    }
    return AxiosIns.instace;
  }
}

type NetworkContextType = {
  instance: AxiosInstance;
  token: string;
};

type NetworkContextProps = {
  networkState: NetworkContextType;
  updateToken: (token: string) => void;
};

const NetworkContext = React.createContext<NetworkContextProps>({} as NetworkContextProps);

const NetworkContextProvider = (props: { children: JSX.Element | JSX.Element[] }): ReactElement => {
  const [state, setState] = useState<NetworkContextType>({
    instance: AxiosIns.getInstace(),
    token: ''
  });

  const updateToken = (token: string): void => {
    setState({ ...state, token });
  };

  return (
    <NetworkContext.Provider
      value={{
        networkState: state,
        updateToken
      }}>
      {props.children}
    </NetworkContext.Provider>
  );
};

export { NetworkContextProvider, NetworkContext };
