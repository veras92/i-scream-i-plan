// "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."

import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { endOfMonth, isWithinInterval, startOfMonth } from 'date-fns';

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
    <div>
      <MonthCalendarHead />
      <CalendarTable tasks={filteredDates} currentDate={currentDate} />
    </div>
  );
}
