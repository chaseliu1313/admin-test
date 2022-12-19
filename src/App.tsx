import React from 'react';
import './App.css';

import { CoreContextProvider } from './hooks';
import MainContainer from './component/main';
import { ErrorBoundary } from 'react-error-boundary';
import { NetworkError } from './component/atoms';
import { NetworkContextProvider } from './network';

function App() {
  return (
    <ErrorBoundary fallback={NetworkError()}>
      <NetworkContextProvider>
        <CoreContextProvider>
          <MainContainer />
        </CoreContextProvider>
      </NetworkContextProvider>
    </ErrorBoundary>
  );
}

export default App;
