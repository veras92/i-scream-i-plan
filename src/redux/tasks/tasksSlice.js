import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'redux/auth/authApi';
import { reauthApi } from 'redux/auth/reauthApi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: null },
  reducers: {
    setTasks: (state, { payload }) => {
      state.items = payload;
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
        state.items = null;
      }
    );
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
