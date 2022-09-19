import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

import { APP_ROOT_ID } from '@/utils/constants';
import { configureAxios } from '@/utils/configureAxios';
import registerServiceWorker from './serviceWorkerRegistration';
import 'styles/index.css';

configureAxios();

const devMode = process.env.NODE_ENV === 'development';
const store = window.__INITIAL_STORE__;

loadableReady(() => {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback='Загрузка...'>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById(APP_ROOT_ID)
  );
});

if (devMode && module && module.hot) {
  module.hot.accept();
}

registerServiceWorker();
