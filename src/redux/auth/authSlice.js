import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { reauthApi } from './reauthApi';

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    birthday: null,
    skype: null,
    userImgUrl: null,
  },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          authApi.endpoints.getCurrentUserInfo.matchPending,
          reauthApi.endpoints.refreshTokens.matchPending
        ),
        state => {
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.getCurrentUserInfo.matchRejected,
          reauthApi.endpoints.refreshTokens.matchRejected
        ),
        state => {
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        authApi.endpoints.getCurrentUserInfo.matchFulfilled,
        (
          state,
          { payload: { name, email, phone, birthday, skype, userImgUrl } }
        ) => {
          state.user.name = name;
          state.user.email = email;
          state.user.phone = phone;
          state.user.birthday = birthday;
          state.user.skype = skype;
          state.user.userImgUrl = userImgUrl;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        reauthApi.endpoints.refreshTokens.matchFulfilled,
        (state, { payload: { data } }) => {
          state.token = data.accessToken;
          state.refreshToken = data.refreshToken;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.updateUserInfo.matchFulfilled,
        (
          state,
          { payload: { name, email, phone, birthday, skype, userImgUrl } }
        ) => {
          state.user.name = name;
          state.user.email = email;
          state.user.phone = phone;
          state.user.birthday = birthday;
          state.user.skype = skype;
          state.user.userImgUrl = userImgUrl;
        }
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.loginUser.matchFulfilled,
          authApi.endpoints.registerUser.matchFulfilled
        ),
        (state, { payload: { name, email, data } }) => {
          state.user.name = name;
          state.user.email = email;
          state.token = data.accessToken;
          state.refreshToken = data.refreshToken;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.logoutUser.matchFulfilled,
          authApi.endpoints.logoutUser.matchRejected,
          reauthApi.endpoints.refreshTokens.matchRejected
        ),
        state => {
          state.user.name = '';
          state.user.email = '';
          state.user.phone = '';
          state.user.birthday = '';
          state.user.skype = '';
          state.user.userImgUrl = '';
          state.isLoggedIn = false;
          state.token = null;
          state.refreshToken = null;
        }
      );
  },
});

export const authReducer = slice.reducer;
