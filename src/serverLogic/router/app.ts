import { Router } from 'express';
import serverRenderMiddleware from '../server-render-middleware';

export function appRoutes(router: Router) {
  router.get('/*', [], serverRenderMiddleware);
}
