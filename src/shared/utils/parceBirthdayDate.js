import { parse, parseISO } from 'date-fns';

export const parseBirthdayDate = dateString => {
  return parse(parseISO(dateString), 'yyyy-MM-dd', new Date());
};
