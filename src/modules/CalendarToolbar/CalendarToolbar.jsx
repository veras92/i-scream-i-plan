// "1. Компонент рендерить:
//  - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись.
//  - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись.
// 2. Компонент отримує тип періоду, та має локальний стейт з датою.
// При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
// Успіх - дані пишуться в глобальний стейт
// Помилка - виводиться відповідне пуш повідомлення."

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { format, parse } from 'date-fns';
import { useGetTasksByMonthQuery } from 'redux/tasks/tasksApi';
import { setTasks } from 'redux/tasks/tasksSlice';
import { selectDate } from 'redux/date/selectors';
import { PeriodPaginator } from './components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = () => {
  const [type, setType] = useState('month');

  const location = useLocation();

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname === '/calendar/day') {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);

  const normalizedDate = useSelector(selectDate);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const dispatch = useDispatch();

  const { data } = useGetTasksByMonthQuery({
    year: format(date, 'yyyy'),
    month: format(date, 'MM'),
  });

  useEffect(() => {
    dispatch(setTasks(data));
  }, [dispatch, data]);

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator type={type} />
      <PeriodTypeSelect onChangeType={setType} />
    </CalendarToolbarWrapper>
  );
};
