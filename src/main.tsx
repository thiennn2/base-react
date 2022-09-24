import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import history from 'utils/history';
import App from './App';

import './utils/i18n';
import 'antd/dist/antd.min.css';
import 'styles/index.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode >
);
