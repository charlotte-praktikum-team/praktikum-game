import { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: () => ReactElement) => () =>
  (
    <BrowserRouter>
      <Suspense fallback='Загрузка...'>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
