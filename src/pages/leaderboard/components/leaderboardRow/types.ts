type LeaderItem = {
  id: number;
  place: number;
  name: string;
  avatar: null | string;
  points: number;
};

export type LeaderboardRowProps = {
  leaderItem: LeaderItem;
};
