import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer, RootState } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { saavn } from '../services/saavn.service';

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: gdm => gdm().concat(saavn.middleware)
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
