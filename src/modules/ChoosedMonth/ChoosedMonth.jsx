// "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."

// import { useGetTasksByMonthQuery } from 'redux/tasks/tasksApi';
import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
// import { useEffect } from 'react';
// import { setTasks } from 'redux/tasks/tasksSlice';
import { selectTasks } from 'redux/tasks/selectors';
import { endOfMonth, isWithinInterval, startOfMonth } from 'date-fns';
// import { useSelector } from 'react-redux';
// import { selectTasks } from 'redux/tasks/selectors';

export function ChoosedMonth() {
  const currentDate = useSelector(selectDate);
  // const dispatch = useDispatch();
  // const { data: tasks } = useGetTasksByMonthQuery('2023', '05');
  // dispatch(setTasks(tasks));

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
