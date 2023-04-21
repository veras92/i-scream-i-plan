import { eachDayOfInterval } from 'date-fns';
import { endOfMonth, getDay, startOfMonth } from 'date-fns';

export function useDaysOfMonth(currentDate) {
  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));
  const firstDayOfMonth = getDay(startMonth) - 1;

  const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });
  return {
    startMonth,
    endMonth,
    firstDayOfMonth,
    daysOfMonth,
  };
}
