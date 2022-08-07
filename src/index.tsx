import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { configureAxios } from './utils/configureAxios';

import 'styles/index.css';
import { APP_ROOT_ID } from './utils/constants';

const devMode = process.env.NODE_ENV === 'development';

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById(APP_ROOT_ID)
);

if (devMode && module && module.hot) {
  module.hot.accept();
}