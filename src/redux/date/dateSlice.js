import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import format from 'date-fns/format';
import { authApi } from 'redux/auth/authApi';
import { reauthApi } from 'redux/auth/reauthApi';

const dateSlice = createSlice({
  name: 'date',
  initialState: { currentDate: format(Date.now(), 'yyyy-MM-dd') },
  reducers: {
    setDates: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.logoutUser.matchFulfilled,
        authApi.endpoints.logoutUser.matchRejected,
        reauthApi.endpoints.refreshTokens.matchRejected
      ),
      state => {
        state.currentDate = format(Date.now(), 'yyyy-MM-dd');
      }
    );
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
