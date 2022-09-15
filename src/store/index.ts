import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppState } from './types';
import userReducer from './user/slice';

export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

const appReducer = combineReducers<AppState>({
  user: userReducer,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production' && !isServer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
