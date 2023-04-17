import { createSlice } from '@reduxjs/toolkit';
import format from 'date-fns/format';

const dateSlice = createSlice({
  name: 'date',
  initialState: format(Date.now(), 'yyyy-MM-dd'),
  reducers: {
    setDates: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
