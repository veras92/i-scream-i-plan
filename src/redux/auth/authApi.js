import { gooseTrackerApi } from 'redux/api/gooseTrackerApi';

export const authApi = gooseTrackerApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/user/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.query({
      query: () => '/user/logout',
    }),
    // refresh: builder.mutation({
    //   query: () => ({
    //     url: '/user/refresh',
    //     method: 'POST',
    //   }),
    // }),
    getUserInfo: builder.query({
      query: () => '/user/info',
    }),
    updateUserInfo: builder.mutation({
      query: credentials => ({
        url: '/user/update',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLazyLogoutQuery,
  //   useRefreshMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = authApi;
