import { compose } from '@/utils/compose';
import { withRouter } from './withRouter';
import { withStore } from './withStore';
import { withAuth } from './withAuth';
import { withFullScreen } from './withFullScreen';

export const withProviders = compose(withStore, withRouter, withAuth, withFullScreen);
