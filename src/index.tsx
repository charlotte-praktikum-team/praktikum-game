import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from './components/App/App';
import { configureAxios } from '@/utils/configureAxios';

configureAxios();

const devMode = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (devMode && module && module.hot) {
  module.hot.accept();
}
