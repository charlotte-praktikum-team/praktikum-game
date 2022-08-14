import { compose } from '@reduxjs/toolkit';
import { withRouter } from './withRouter';
import { withStore } from './withStore';

export const withProviders = compose(withStore, withRouter);
