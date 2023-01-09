import React, { Dispatch, ReactElement, useReducer } from 'react';
import { CoreActions, CoreState, coreStateReducers } from '../context';

export const initCoreState: CoreState = {
  userName: ''
};

type CoreContextProps = {
  coreState: CoreState;
  updateCoreState: Dispatch<CoreActions>;
};

const CoreContext = React.createContext<CoreContextProps>({} as CoreContextProps);

const CoreContextProvider = (props: { children: JSX.Element | JSX.Element[] }): ReactElement => {
  const [state, dispatch] = useReducer(coreStateReducers, initCoreState);

  return (
    <CoreContext.Provider value={{ coreState: state, updateCoreState: dispatch }}>
      {props.children}
    </CoreContext.Provider>
  );
};
export { CoreContextProvider, CoreContext };
