import { Request, Response } from 'express';
import { UsedThemes } from '../models/usedThemes';

export const themeController = {
  getActiveThemeHandler: async (req: Request, res: Response) => {
    const { userId } = req.query;

    try {
      const theme = await UsedThemes.findOne({ where: { user_id: Number(userId) } });
      res.json({ theme });
    } catch {
      res.status(500).send();
    }
  },
};
