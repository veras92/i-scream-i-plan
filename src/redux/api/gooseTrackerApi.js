import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setIsLogedIn, setRefreshing, setTokens } from 'redux/auth/authSlice1';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://goose-tracker-backend.p.goit.global',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.tokens.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(setRefreshing({ status: true }));
    const refreshResult = await baseQuery(
      { url: 'user/refresh', method: 'POST' },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      api.dispatch(setTokens({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
      api.dispatch(setRefreshing({ status: false }));
    } else {
      api.dispatch(setTokens({ accessToken: '', refreshToken: '' }));
      api.dispatch(setIsLogedIn({ status: false }));
      api.dispatch(setRefreshing({ status: false }));
      // підчистити таски, якщо вони зберігаються на слайсі тасок
    }
  }

  return result;
};

export const gooseTrackerApi = createApi({
  reducerPath: 'gooseTrackerApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Tasks'],
  endpoints: builder => ({}),
});
