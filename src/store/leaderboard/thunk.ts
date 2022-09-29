import { createAsyncThunk } from '@reduxjs/toolkit';
import { LeaderboardService } from 'services/leaderboard';
import { RATING_FIELD_NAME, LEADERBOARD_PAGINATION_SIZE } from 'utils/constants';
import { LeaderboardData } from 'types';
import { LeaderboardResponseItem } from 'services/leaderboard/types';

export const getLeaderboard = createAsyncThunk('leaderboard/getLeaderboard', async (cursor: number): Promise<LeaderboardData[]> => {
  const response = await LeaderboardService.getLeaderboard({
    cursor,
    limit: LEADERBOARD_PAGINATION_SIZE,
    ratingFieldName: RATING_FIELD_NAME,
  });

  return response.map((leader: LeaderboardResponseItem, index: number) => ({
    ...leader.data,
    place: index + 1 + cursor,
  }));
});
