import { Level } from '@/store/dashboard/types';
import { LEVELS } from '@/utils/constants';
import { LEVELS_STUB } from './mock';

export const DashboardService = {
  getLevels: () => {
    const levels = localStorage.getItem(LEVELS);
    return Promise.resolve(levels ? (JSON.parse(levels) as Level[]) : LEVELS_STUB);
  },
  saveLevels: (levels: Level[]) => Promise.resolve(localStorage.setItem(LEVELS, JSON.stringify(levels))),
};
