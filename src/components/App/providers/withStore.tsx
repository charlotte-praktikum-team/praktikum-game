import { ReactElement } from 'react';
import { Provider } from 'react-redux';

export const withStore = (Component: () => ReactElement) => () => {
  const store = window.__INITIAL_STORE__;

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};
