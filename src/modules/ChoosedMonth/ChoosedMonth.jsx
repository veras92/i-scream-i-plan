// "1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.
// 3. Модуль підписаний на колекцію задач з глобального стейту."

import CalendarTable from './components/CalendarTable/CalendarTable';
import MonthCalendarHead from './components/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
// import { useSelector } from 'react-redux';
// import { selectTasks } from 'redux/tasks/selectors';

export function ChoosedMonth() {
  // const { currentDate } = useParams();
  const currentDate = useSelector(selectDate);

  // const tasks = useSelector(selectTasks);
  //-----------------------example
  const tasks = [
    {
      date: currentDate,
      tasks: [
        {
          title: 'example',
          date: currentDate,
          priority: 'priority',
        },
        {
          title: 'example2',
          date: currentDate,
          priority: 'priority',
        },
        {
          title: 'example3',
          date: currentDate,
          priority: 'priority',
        },
      ],
    },
    {
      date: '2023-04-25',
      tasks: [
        {
          title: 'example',
          date: currentDate,
          priority: 'priority',
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ width: '1087px' }}>
        <MonthCalendarHead />
        <CalendarTable tasks={tasks} currentDate={currentDate} />
      </div>
    </>
  );
}
