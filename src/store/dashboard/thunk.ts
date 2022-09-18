import { createAsyncThunk } from '@reduxjs/toolkit';
import { DashboardService } from '@/services/dashboard';
import { AppState } from '../types';
import { LeaderboardService } from '@/services/leaderboard';

export const getLevels = createAsyncThunk('dashboard/getLevels', () => DashboardService.getLevels());

export const completeLevel = createAsyncThunk(
  'dashboard/completeLevel',
  async ({ level: levelNumber, points }: { level: number; points: number }, thunkApi) => {
    const {
      dashboard: { levels },
      user: { user },
    } = thunkApi.getState() as AppState;
    const levelsList = levels.length ? levels : await DashboardService.getLevels();
    const updatedList = levelsList.map((level) =>
      level.number === levelNumber ? { ...level, points: Math.max(points, level.points || 0), isComplete: true } : level
    );
    const pointsSum = updatedList.reduce((acc, level) => acc + (level.points || 0), 0);

    LeaderboardService.savePoints({ points: pointsSum, login: user.login, avatar: user.avatar });
    return DashboardService.saveLevels(updatedList);
  }
);
