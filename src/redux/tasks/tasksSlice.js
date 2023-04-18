import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'redux/auth/authApi';
import { reauthApi } from 'redux/auth/reauthApi';
import { tasksApi } from './tasksApi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (_, { payload }) => {
      return payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        tasksApi.endpoints.getTasksByMonth.matchFulfilled,
        (_, { payload }) => {
          return payload;
        }
      )
      .addMatcher(
        tasksApi.endpoints.createTask.matchFulfilled,
        (state, { payload }) => {
          return state.map(item => {
            return {
              ...item,
              tasks: [...item.tasks, payload],
            };
          });
        }
      )
      .addMatcher(
        tasksApi.endpoints.changeTask.matchFulfilled,
        (state, { payload }) => {
          return state.map(item => {
            return {
              ...item,
              tasks: item.tasks.map(task => {
                if (task._id === payload._id) {
                  return payload;
                }
                return task;
              }),
            };
          });
        }
      )
      .addMatcher(
        tasksApi.endpoints.deleteTask.matchFulfilled,
        (state, { payload }) => {
          state.forEach(({ tasks }) => {
            const index = tasks.findIndex(task => task._id === payload._id);
            if (index) tasks.splice(index, 1);
          });
          return state.filter(({ tasks }) => tasks.length !== 0);
        }
      )
      .addMatcher(
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

export const selectTasksForToday = state => {
  const today = new Date().toISOString().slice(0, 10);
  return state.tasks.filter(({ date }) => date === today);
};
