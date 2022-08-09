import { Router } from '@/router/Router';
import { withRouter } from '@/components/App/providers/withRouter';

const App = () => <Router />;

export default withRouter(App, 'Прогреваемся...');
