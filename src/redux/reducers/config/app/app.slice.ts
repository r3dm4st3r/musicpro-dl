import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false,
  search: {
    type: null,
    search: ''
  }
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    SET_THEME: state => ({
      ...state,
      dark: !state.dark
    }),

    SET_SEARCH: (state, action) => ({
      ...state,
      search: {
        ...state.search,
        type: action.payload.type,
        search: action.payload.search
      }
    })
  }
});

export const { SET_SEARCH } = appConfigSlice.actions;
export const SEARCH = state => state.config.app.search;
