import { Request, Response } from 'express';
import { UsedThemes } from '../models/usedThemes';

export const themeController = {
  getActiveTheme: async (id: number) => {
    try {
      const theme = await UsedThemes.findOne({ where: { user_id: id } });
      return theme?.getDataValue('theme') || '';
    } catch {
      return '';
    }
  },
  saveThemeHandler: async (req: Request, res: Response) => {
    const { theme, userId } = req.body;

    try {
      const record = await UsedThemes.findOne({ where: { user_id: Number(userId) } });

      if (record) {
        await UsedThemes.update({ theme: String(theme) }, { where: { user_id: Number(userId) } });
      } else {
        await UsedThemes.create({
          user_id: Number(userId),
          theme: String(theme)
        });
      }

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  },
};
