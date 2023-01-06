import { useContext } from 'react';
import { NetworkContext } from '../network';

export const useErrors = (): {
  error: { loginError: string; networkError: string };
  setError: (e: { loginError: string; networkError: string }) => void;
} => {
  const { networkState, setError } = useContext(NetworkContext);

  return { error: networkState.error, setError };
};
