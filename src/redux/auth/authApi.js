import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  cleanAuthState,
  setCredentialsOnRefresh,
  setIsRefreshing,
} from './authSlice';
import { setTasks } from 'redux/tasks/tasksSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://goose-tracker-backend.p.goit.global/',
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('sending refresh token');
    api.dispatch(setIsRefreshing(true));
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      {
        url: `user/refresh`,
        method: 'POST',
        prepareHeaders: (headers, { getState }) => {
          const state = getState();
          const token = state.auth.refreshToken;
          if (token) {
            headers.set('authorization', `Bearer ${token}`);
          }
          return headers;
        },
      },
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentialsOnRefresh({ ...refreshResult }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(cleanAuthState());
      api.dispatch(setTasks(null));
    }
    api.dispatch(setIsRefreshing(false));
  }

  return result;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
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
  useGetCurrentUserInfoQuery,
  useLazyGetCurrentUserInfoQuery,
  useUpdateUserInfoMutation,
} = authApi;
