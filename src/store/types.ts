import { DashboardState } from './dashboard/types';
import { ForumState } from './forum/types';
import { LeaderboardState } from './leaderboard/types';
import { UserState } from './user/types';

export type AppState = {
  user: UserState;
  dashboard: DashboardState;
  leaderboard: LeaderboardState;
  forum: ForumState;
};
