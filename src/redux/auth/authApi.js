import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let persistedRefreshToken = null;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-tracker-backend.p.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const token = state.auth.token;
      if (token) {
        persistedRefreshToken = state.auth.refreshToken;
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `user/register`,
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `user/login`,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.query({
      query: () => 'user/logout',
      invalidatesTags: ['Auth'],
    }),
    refreshTokens: builder.mutation({
      query: () => ({
        url: `user/refresh`,
        method: 'POST',
        body: {
          refreshToken: persistedRefreshToken,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    getCurrentUserInfo: builder.query({
      query: () => 'user/info',
      invalidatesTags: ['Auth'],
    }),
    updateUserInfo: builder.mutation({
      query: data => ({
        url: `user/update`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLazyLogoutUserQuery,
  useRefreshTokensMutation,
  useGetCurrentUserInfoQuery,
  useLazyGetCurrentUserInfoQuery,
  useUpdateUserInfoMutation,
} = authApi;
