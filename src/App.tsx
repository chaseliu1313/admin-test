import React from 'react';
import './App.css';

import { CoreContextProvider } from './hooks';
import MainContainer from './component/main';

function App() {
  return (
    <CoreContextProvider>
      <MainContainer />
    </CoreContextProvider>
  );
}

export default App;
