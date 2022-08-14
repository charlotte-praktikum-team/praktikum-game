import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

export const withStore = (Component: () => ReactElement) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
