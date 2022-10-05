import { localAxios } from 'utils/configureAxios';
import { SaveThemeRequest } from './types';

export const ThemeService = {
  saveTheme: (payload: SaveThemeRequest) => localAxios.post<SaveThemeRequest>('/theme', payload)
};
