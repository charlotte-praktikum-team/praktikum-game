import { Router } from 'express';

import serverRenderMiddleware from '../server-render-middleware';
import authMiddleware from '../authMiddleware';

export function appRoutes(router: Router) {
  router.get('/*', [authMiddleware], serverRenderMiddleware);
}
