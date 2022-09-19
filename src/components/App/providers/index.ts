import { compose } from '@/utils/compose';
import { withAuth } from './withAuth';
import { withFullScreen } from './withFullScreen';

export const withProviders = compose(withAuth, withFullScreen);
