import React, { Dispatch, ReactElement, useReducer } from 'react';
import { CoreActions, CoreState, coreStateReducers } from '../context';

export const initCoreState: CoreState = {
  token: ''
};

type CoreContextProps = {
  coreState: CoreState;
  updateCoreState: Dispatch<CoreActions>;
};

const CoreContext = React.createContext<CoreContextProps>({} as CoreContextProps);

const CoreContextProvider = (props: { children: React.ReactChild }): ReactElement => {
  const [state, dispatch] = useReducer(coreStateReducers, initCoreState);

  return (
    <CoreContext.Provider value={{ coreState: state, updateCoreState: dispatch }}>
      {props.children}
    </CoreContext.Provider>
  );
};
export { CoreContextProvider, CoreContext };
