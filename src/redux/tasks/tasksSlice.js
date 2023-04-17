import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'redux/auth/authApi';
import { reauthApi } from 'redux/auth/reauthApi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (_, { payload }) => {
      return payload;
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
        state.length = 0;
      }
    );
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
