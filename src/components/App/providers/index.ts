import { compose } from '@/utils/compose';
import { withAuth } from './withAuth';

export const withProviders = compose(withAuth);
