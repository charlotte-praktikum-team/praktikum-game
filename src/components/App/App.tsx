import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Router } from 'router/router';
import { ErrorBoundary } from 'components/errorBoundary/errorBoundary';
import { withProviders } from './providers';

const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);

const Component = hot(withProviders(App));

export { Component as App };
