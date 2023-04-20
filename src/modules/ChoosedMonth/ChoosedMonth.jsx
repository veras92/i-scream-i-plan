import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { endOfMonth, isWithinInterval, startOfMonth } from 'date-fns';
import { Wrapper } from './ChoosedMonth.styled';

export function ChoosedMonth() {
  const currentDate = useSelector(selectDate);

  const tasks = useSelector(selectTasks);

  //-----------------------example
  const startDate = startOfMonth(new Date(currentDate));
  const endDate = endOfMonth(new Date(currentDate));

  const filteredDates = tasks.filter(task => {
    const dateObj = new Date(task.date);
    return isWithinInterval(dateObj, { start: startDate, end: endDate });
  });

  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable tasks={filteredDates} currentDate={currentDate} />
    </Wrapper>
  );
}
