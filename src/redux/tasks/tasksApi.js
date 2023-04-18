import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-tracker-backend.p.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasksByMonth: builder.query({
      query: ({ year, month }) => `task/by-month?year=${year}&month=${month}`,
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation({
      query: task => ({
        url: 'task',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: id => ({
        url: `task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    changeTask: builder.mutation({
      query: (id, task) => ({
        url: `task/${id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksByMonthQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useChangeTaskMutation,
} = tasksApi;
