import { Router } from '@/router/router';
import { withRouter } from '@/components/App/providers/withRouter';

const App = () => <Router />;

export default withRouter(App, 'Прогреваемся...');
