import { DARK_THEME_CLASS, LIGHT_THEME_CLASS } from 'utils/constants';

export type Theme = typeof DARK_THEME_CLASS | typeof LIGHT_THEME_CLASS;

export type SaveThemeRequest = {
  theme: Theme;
  userId: number;
};
