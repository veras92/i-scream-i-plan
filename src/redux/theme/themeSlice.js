import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { refreshTheme, themeActions } from './operations';
import { THEME_OPTIONS } from 'shared/services/themeOptions';

const getActions = type => themeActions.map(action => action[type]);

const initialState = { mode: THEME_OPTIONS.light, isThemeRefreshing: false };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(refreshTheme.pending, state => (state.isThemeRefreshing = true))
      .addCase(
        refreshTheme.fulfilled,
        state => (state.isThemeRefreshing = false)
      )
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, { payload }) => {
        state.mode = payload;
      });
  },
});

export const themeReducer = themeSlice.reducer;
