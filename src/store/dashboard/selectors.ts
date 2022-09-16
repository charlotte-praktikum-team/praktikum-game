import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../types';
import { Level } from './types';

export const selectLevels = (state: AppState) => state.dashboard.levels;
export const selectIsLoading = (state: AppState) => state.dashboard.isLoading;

export const selectCurrentLevelNumber = createSelector(
  (state: AppState) => state.dashboard.levels,
  (levels: Level[]) => levels.find((level) => !level.isComplete)?.number ?? 1
);
