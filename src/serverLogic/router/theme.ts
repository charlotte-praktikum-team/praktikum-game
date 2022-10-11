import { Router } from 'express';

import { themeController } from '../controllers/theme';
import authMiddleware from '../authMiddleware';

export function themeRoutes(router: Router) {
  router.post('/api/theme', [authMiddleware], themeController.saveThemeHandler);
}
