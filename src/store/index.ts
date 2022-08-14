import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';

const appReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
