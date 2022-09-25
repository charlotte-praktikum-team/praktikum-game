import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppState } from './types';
import userReducer from './user/slice';
import dashboardReducer from './dashboard/slice';
import leaderboardReducer from './leaderboard/slice';
import { isServer } from 'utils/isServer';

const appReducer = combineReducers<AppState>({
  user: userReducer,
  dashboard: dashboardReducer,
  leaderboard: leaderboardReducer,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production' && !isServer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
