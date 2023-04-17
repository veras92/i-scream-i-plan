import { parse, isDate } from 'date-fns';

export const parseDateString = (_, originalValue) =>
  isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date());
