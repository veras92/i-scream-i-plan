import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { themeActions } from './operations';
import { THEME_OPTIONS } from 'shared/services/themeOptions';

const getActions = type => themeActions.map(action => action[type]);

const initialState = { mode: THEME_OPTIONS.light };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(...getActions('fulfilled')),
      (state, { payload }) => {
        state.mode = payload;
      }
    );
  },
});

export const themeReducer = themeSlice.reducer;
