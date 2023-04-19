// "1. Компонент рендериться на маршрут /calendar.
// 2. При першому вході на сторінку компонент виконує переадресацію на розширений маршрут /calendar/month/:currentDate для відображення календяря місяця
// 3. На сторінці знаходиться модуль CalendarToolbar - з яким користувач може обрати тип періоду, та його інтервал
// 4. На сторінці відображаеться один з модулів періоду дат календаря:
//  - ChoosedMonth - дозволяє подивитись всі задачі на місяць, перейти на сторінку одного дня ChoosedDay.
//  - ChoosedDay - дозволяє створювати задачі та розділити ці задачі  на групи по ступеню їх виконання.
// 5. При новому відвідуванні додатку та першому вході на сторінку відображаеться модуль ChoosedMonth з розкладкою комірок з датами поточного місяця.
// 6. На сторінці повинен здійснюватись запит за завданнями, якщо вони відсутні в глобальному стейті
// 7. Успіх - данні записуються у відповідний стейт
// 8. Помилка - користувачу показується відповідне пушповідомлення"

// import { format } from 'date-fns';
import { CalendarToolbar } from 'modules/CalendarToolbar/CalendarToolbar';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Loader } from 'shared/components/Loader/Loader';
// import { selectDate } from 'redux/date/selectors';
// import { selectTasks } from 'redux/tasks/selectors';
// import { useGetTasksByMonthQuery } from 'redux/tasks/tasksApi';
// import { setTasks } from 'redux/tasks/tasksSlice';

export default function CalendarPage() {
  // const normalizedDate = useSelector(selectDate);
  // const tasks = useSelector(selectTasks);
  // console.log(tasks);
  // const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  // const dispatch = useDispatch();

  // const { data } = useGetTasksByMonthQuery({
  //   year: format(normalizedDate, 'yyyy'),
  //   month: format(normalizedDate, 'MM'),
  // });

  // useEffect(() => {
  //   dispatch(setTasks(data));
  // }, [dispatch, data]);
  return (
    <div>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      CalendarPage
      <CalendarToolbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
