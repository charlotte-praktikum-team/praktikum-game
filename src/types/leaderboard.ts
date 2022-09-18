export type LeaderboardServerData = {
  points: number;
  login: string;
  avatar: string | null;
};

export type LeaderboardData = LeaderboardServerData & {
  place: number;
};
