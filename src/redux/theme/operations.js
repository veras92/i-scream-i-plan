import { createAsyncThunk } from '@reduxjs/toolkit';
import { THEME_OPTIONS } from 'shared/services/themeOptions';

export const refreshTheme = createAsyncThunk(
  'theme/refresh',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    const isLoggedIn = state.auth.isLoggedIn;
    if (!isLoggedIn) return THEME_OPTIONS.light;
    if (isLoggedIn)
      return persistedMode === null ? THEME_OPTIONS.light : persistedMode;
  }
);

export const toggleTheme = createAsyncThunk(
  'theme/toggle',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    return persistedMode === THEME_OPTIONS.light
      ? THEME_OPTIONS.dark
      : THEME_OPTIONS.light;
  }
);

export const themeActions = [refreshTheme, toggleTheme];
