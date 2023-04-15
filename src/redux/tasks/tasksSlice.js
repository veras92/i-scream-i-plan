import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
