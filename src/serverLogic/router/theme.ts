import { Router } from 'express';
import { themeController } from '../controllers/theme';

export function themeRoutes(router: Router) {
  router.get('/api/active-theme', [], themeController.getActiveThemeHandler);
}
