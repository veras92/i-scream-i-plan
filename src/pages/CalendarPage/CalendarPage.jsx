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

import { CalendarToolbar } from 'modules/CalendarToolbar/CalendarToolbar';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function CalendarPage() {
  return (
    <div>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      CalendarPage
      <CalendarToolbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
