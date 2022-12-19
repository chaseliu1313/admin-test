import React, { ReactElement } from 'react';

export const Error = (): ReactElement => (
  <div
    style={{
      height: 500,
      width: 500,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <div style={{ height: 80, width: 80 }}>
      <h2>Sorry, there was an error completing your request</h2>
    </div>
  </div>
);
