import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reauthApi = createApi({
  reducerPath: 'reauthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-tracker-backend.p.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.refreshToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    refreshTokens: builder.mutation({
      query: () => ({
        url: `user/refresh`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useRefreshTokensMutation } = reauthApi;
