// "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."

import { useParams } from 'react-router-dom';
import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';

export function ChoosedMonth() {
  const { currentDate } = useParams();

  const tasks = useSelector(selectTasks);
  //-----------------------example

  return (
    <>
      <div>ChoosedMonth</div>
      <MonthCalendarHead />
      <CalendarTable tasks={tasks} currentDate={currentDate} />
    </>
  );
}
