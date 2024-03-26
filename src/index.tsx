import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { MuiThemeWrapper } from './components/MuiThemeWrapper/MuiThemeWrapper';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MuiThemeWrapper />
      </Router>
    </Provider>
  </React.StrictMode>,
);
