import { Router } from '@/router/router';
import { withProviders } from '@/components/App/providers';
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary';

const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);

export default withProviders(App);
