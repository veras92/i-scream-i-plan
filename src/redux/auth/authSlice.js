import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    birthday: '',
    skype: '',
    userImgUrl: '',
  },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentialsOnUpdate: (
      state,
      { payload: { name, email, phone, birthday, skype, userImgUrl } }
    ) => {
      state.user.name = name;
      state.user.email = email;
      state.user.phone = phone;
      state.user.birthday = birthday;
      state.user.skype = skype;
      state.user.userImgUrl = userImgUrl;
    },
    setCredentialsOnRefresh: (state, { payload: { data } }) => {
      state.token = data.accessToken;
      state.refreshToken = data.refreshToken;
      state.isLoggedIn = true;
    },
    setIsRefreshing: (state, { payload }) => {
      state.isRefreshing = payload;
    },
    cleanAuthState: cleanState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.getCurrentUserInfo.matchPending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(authApi.endpoints.getCurrentUserInfo.matchRejected, state => {
        state.isRefreshing = false;
      })
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
          authApi.endpoints.logoutUser.matchFulfilled,
          authApi.endpoints.logoutUser.matchRejected
        ),
        cleanState
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
      );
  },
});

export const { setCredentialsOnRefresh, setIsRefreshing, cleanAuthState } =
  slice.actions;

export const authReducer = slice.reducer;

function cleanState(state) {
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
