import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokens: { accessToken: '', refreshToken: '' },
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshing: (state, { payload: status }) => {
      state.isRefreshing = status;
    },
    setTokens: (state, { payload: { accessToken, refreshToken } }) => {
      state.tokens.accessToken = accessToken;
      state.tokens.refreshToken = refreshToken;
      state.isLoggedIn = true;
    },
    setIsLogedIn: (state, { payload: { status } }) => {
      state.isLoggedIn = status;
    },
  },
});

export const { setRefreshing, setTokens, setIsLogedIn } = slice.actions;

export const authReducer = slice.reducer;
