import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { APP_ROOT_ID } from '@/utils/constants';
import { configureAxios } from '@/utils/configureAxios';
import 'styles/index.css';

configureAxios();

const devMode = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(APP_ROOT_ID)
);

if (devMode && module && module.hot) {
  module.hot.accept();
}
