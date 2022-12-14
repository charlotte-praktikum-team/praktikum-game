import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';

import { App } from './components/App/App';

import { APP_ROOT_ID } from 'utils/constants';
import { configureAxios } from 'utils/configureAxios';
import registerServiceWorker from './serviceWorkerRegistration';
import 'styles/index.css';
import { store } from 'store';

configureAxios();

loadableReady(() => {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById(APP_ROOT_ID)
  );
});

registerServiceWorker();
