import { combineReducers } from '@reduxjs/toolkit';
import { configReducer } from './reducers/config/config.reducer';
import { saavn } from '../services/saavn.service';

export const rootReducer = combineReducers({
  config: configReducer,
  [saavn.reducerPath]: saavn.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
