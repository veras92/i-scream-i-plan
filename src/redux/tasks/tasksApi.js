import { gooseTrackerApi } from 'redux/api/gooseTrackerApi';

export const tasksApi = gooseTrackerApi.injectEndpoints({
  endpoints: builder => ({
    getTasksByMonth: builder.query({
      query: (year, month) => `task/by-month?year=${year}&month=${month}`,
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation({
      query: task => ({
        url: 'task',
        method: 'POST',
        body: task,
      }),
      providesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: `task/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Tasks'],
    }),
    changeTask: builder.mutation({
      query: (id, task) => ({
        url: `task/${id}`,
        method: 'PUT',
        body: task,
      }),
      providesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksByMonthQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useChangeTaskMutation,
} = tasksApi;
