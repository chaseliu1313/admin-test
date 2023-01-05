import React from 'react';
import './App.css';
import { CoreContextProvider } from './hooks';
import MainContainer from './component/main';
import { ErrorBoundary } from 'react-error-boundary';
import { NetworkError } from './component/atoms';
import { NetworkContextProvider } from './network';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, styledTheme } from './theme';

function App() {
  return (
    <ErrorBoundary fallback={NetworkError()}>
      <NetworkContextProvider>
        <CoreContextProvider>
          <ThemeProvider theme={styledTheme}>
            <GlobalStyles />
            <MainContainer />
          </ThemeProvider>
        </CoreContextProvider>
      </NetworkContextProvider>
    </ErrorBoundary>
  );
}

export default App;
