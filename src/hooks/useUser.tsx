import React, { useContext } from 'react';
import { CoreActions, CoreActionTypes, CoreState, coreStateReducers } from '../context';
import { CoreContext } from './coreContext';

export const useUser = (): { userName: string; setUser: (user: string) => void } => {
  const { coreState, updateCoreState } = useContext(CoreContext);

  const setUser = (user: string): void => {
    updateCoreState({ type: CoreActionTypes.SET_USER, payload: { userName: user } });
  };
  return { userName: coreState.userName, setUser };
};
