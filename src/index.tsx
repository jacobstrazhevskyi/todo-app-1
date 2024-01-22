import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Test } from './Test';
// const Test = () => ('test component');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
    123
  </React.StrictMode>,
);
