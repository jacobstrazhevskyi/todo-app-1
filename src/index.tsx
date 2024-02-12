import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MuiThemeWrapper } from './components/MuiThemeWrapper/MuiThemeWrapper';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeWrapper />
    </Provider>
  </React.StrictMode>,
);
