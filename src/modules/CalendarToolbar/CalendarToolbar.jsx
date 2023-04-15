// "1. Компонент рендерить:
//  - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись.
//  - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись.
// 2. Компонент отримує тип періоду, та має локальний стейт з датою.
// При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
// Успіх - дані пишуться в глобальний стейт
// Помилка - виводиться відповідне пуш повідомлення."

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import format from 'date-fns/format';
import add from 'date-fns/add';
import sub from 'date-fns/sub';
import { useGetTasksByMonthQuery } from 'redux/tasks/tasksApi';
import { setTasks } from 'redux/tasks/tasksSlice';
import { PeriodPaginator } from './components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './components/PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = () => {
  const [type, setType] = useState('month');
  const [date, setDate] = useState(() => Date.now());

  const dispatch = useDispatch();

  const { data } = useGetTasksByMonthQuery({
    year: format(date, 'yyyy'),
    month: format(date, 'MM'),
  });

  useEffect(() => {
    dispatch(setTasks(data));
  }, [dispatch, data]);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${type}/${format(date, 'yyyy-MM-dd')}`);
  }, [type, date, navigate]);

  const onChangeDate = operation => {
    if (operation === 'addition') {
      if (type === 'day') {
        setDate(add(date, { days: 1 }));
        return;
      }
      setDate(add(date, { months: 1 }));
      return;
    }
    if (type === 'day') {
      setDate(sub(date, { days: 1 }));
      return;
    }
    setDate(sub(date, { months: 1 }));
  };

  return (
    <>
      <PeriodPaginator date={date} type={type} onChange={onChangeDate} />
      <PeriodTypeSelect onChangeType={setType} />
    </>
  );
};
