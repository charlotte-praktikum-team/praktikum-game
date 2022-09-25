import React from 'react';

import { Router } from 'router/router';
import { ErrorBoundary } from 'components/errorBoundary/errorBoundary';
import { withProviders } from './providers';

const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);

export default withProviders(App);
