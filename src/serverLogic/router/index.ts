import { Router } from 'express';

import { appRoutes } from './app';
import { forumRoutes } from './forum';
import { themeRoutes } from './theme';

const router: Router = Router();

themeRoutes(router);
forumRoutes(router);
appRoutes(router);

export default router;
