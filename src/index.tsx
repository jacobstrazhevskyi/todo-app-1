import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
<<<<<<< HEAD
=======
import { Test } from './Test';
// const Test = () => ('test component');
>>>>>>> c4830f292a38ff34e7b6e9dd5c6cfc57b8b4ca12

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    {/* <App /> */}
    <Test />
    123
>>>>>>> c4830f292a38ff34e7b6e9dd5c6cfc57b8b4ca12
  </React.StrictMode>,
);
