import { Router } from '@/router/router';
import { withRouter } from '@/components/App/providers/withRouter';
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary';

const App = () => (
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>
);

export default withRouter(App, 'Прогреваемся...');
