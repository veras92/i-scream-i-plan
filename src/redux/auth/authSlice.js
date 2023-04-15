import { createSlice } from '@reduxjs/toolkit';

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
  // isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentialsOnRegister: (state, { payload: { name, email, data } }) => {
      state.user.name = name;
      state.user.email = email;
      state.token = data.accessToken;
      state.refreshToken = data.refreshToken;
      state.isLoggedIn = true;
    },
    setCredentialsOnLogin: (
      state,
      { payload: { name, email, phone, birthday, skype, userImgUrl, data } }
    ) => {
      state.user.name = name;
      state.user.email = email;
      state.user.phone = phone;
      state.user.birthday = birthday;
      state.user.skype = skype;
      state.user.userImgUrl = userImgUrl;
      state.token = data.accessToken;
      state.refreshToken = data.refreshToken;
      state.isLoggedIn = true;
    },
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
    cleanStateOnLogout: state => {
      state.user.name = '';
      state.user.email = '';
      state.user.phone = '';
      state.user.birthday = '';
      state.user.skype = '';
      state.user.userImgUrl = '';
      state.isLoggedIn = false;
      state.token = null;
      state.refreshToken = null;
    },
    // setIsRefreshing: (state, { payload }) => {
    //   state.isRefreshing = payload;
    // },
  },
});

export const {
  setCredentialsOnRegister,
  setCredentialsOnLogin,
  setCredentialsOnUpdate,
  cleanStateOnLogout,
} = slice.actions;

export const authReducer = slice.reducer;
