import { parse } from 'date-fns';

export const parseBirthdayDate = dateString => {
  return parse(dateString, 'yyyy-MM-dd', new Date());
};
