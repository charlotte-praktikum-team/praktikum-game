import { Router } from 'express';

import { appRoutes } from './app';
import { themeRoutes } from './theme';

const router: Router = Router();

themeRoutes(router);
appRoutes(router);

export default router;
