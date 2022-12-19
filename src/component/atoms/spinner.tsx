import React, { ReactElement } from 'react';

export const Spinner = (): ReactElement => (
  <div
    style={{
      height: 500,
      width: 500,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <div id="spinner"></div>
  </div>
);
