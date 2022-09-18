import { LeaderboardServerData } from '@/types';

export type SavePointsRequest = {
  data: LeaderboardServerData;
  ratingFieldName: string;
  teamName: string;
};

export type LeaderboardRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};

export type LeaderboardResponseItem = {
  data: LeaderboardServerData;
};

export type LeaderboardResponse = LeaderboardResponseItem[];
