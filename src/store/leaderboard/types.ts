import { LeaderboardData } from 'types';

export type LeaderboardState = {
  leaderboardList: LeaderboardData[];
  isLoading: boolean;
  errorMessage: string;
};
