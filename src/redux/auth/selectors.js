export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserInfo = state => state.auth.user;

export const selectAccessToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;
