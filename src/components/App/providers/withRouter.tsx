import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: () => ReactNode, fallback: ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={fallback}>{Component()}</Suspense>
    </BrowserRouter>
  );
