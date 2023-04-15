import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'redux/auth/authApi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: null },
  reducers: {
    setTasks: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.logoutUser.matchFulfilled, state => {
      state.items = null;
    });
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
