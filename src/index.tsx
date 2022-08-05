import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { configureAxios } from './utils/configureAxios';

import 'styles/index.css';

const devMode = process.env.NODE_ENV === 'development';

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

if (devMode && module && module.hot) {
  module.hot.accept();
}