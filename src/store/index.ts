import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from './types';
import userReducer from './user/slice';

const appReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
