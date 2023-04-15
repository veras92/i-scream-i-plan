import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: null,
  reducers: {
    setTasks: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
