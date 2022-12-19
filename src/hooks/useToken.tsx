import { useContext } from 'react';
import { NetworkContext } from '../network';

export const useToken = (): { token: string; updateToken: (token: string) => void } => {
  const { networkState, updateToken } = useContext(NetworkContext);

  return { token: networkState.token, updateToken };
};
