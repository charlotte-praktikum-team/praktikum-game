import { AppState } from '../types';

export const selectLeaderboardList = (state: AppState) => state.leaderboard.leaderboardList;
export const selectIsLoading = (state: AppState) => state.leaderboard.isLoading;
