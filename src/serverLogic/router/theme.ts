import { Router } from 'express';
import { themeController } from '../controllers/theme';

export function themeRoutes(router: Router) {
  router.post('/api/theme', themeController.saveThemeHandler);
}
