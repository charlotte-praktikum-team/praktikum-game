import { practicumAxios } from 'utils/configureAxios';
import { RATING_FIELD_NAME, TEAM_NAME } from 'utils/constants';
import { SavePointsRequest, LeaderboardRequest, LeaderboardResponse } from './types';
import { LeaderboardServerData } from 'types';

export const LeaderboardService = {
  savePoints: (data: LeaderboardServerData) =>
    practicumAxios.post<SavePointsRequest>('/leaderboard', {
      data,
      ratingFieldName: RATING_FIELD_NAME,
      teamName: TEAM_NAME,
    }),
  getLeaderboard: (data: LeaderboardRequest) =>
    practicumAxios.post<LeaderboardRequest, LeaderboardResponse>(`/leaderboard/${TEAM_NAME}`, data),
};
