import { withRouter } from './withRouter';
import { withStore } from './withStore';
import { withAuth } from './withAuth';
import { compose } from '@/utils/compose';

export const withProviders = compose(withStore, withRouter, withAuth);
