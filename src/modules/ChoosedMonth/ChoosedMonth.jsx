import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { isWithinInterval } from 'date-fns';
import { Wrapper } from './ChoosedMonth.styled';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';

export function ChoosedMonth() {
  const currentDate = useSelector(selectDate);

  const tasks = useSelector(selectTasks);

  const { startMonth, endMonth } = useDaysOfMonth(currentDate);

  const filteredDates = tasks.filter(task => {
    const dateObj = new Date(task.date);
    return isWithinInterval(dateObj, { start: startMonth, end: endMonth });
  });

  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable tasks={filteredDates} currentDate={currentDate} />
    </Wrapper>
  );
}
