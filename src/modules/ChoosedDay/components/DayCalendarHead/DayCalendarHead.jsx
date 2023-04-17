//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, format, parse } from 'date-fns';
import { setDates } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/selectors';

export const DayCalendarHead = () => {
  const normalizedDate = useSelector(selectDate);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dates = [];
  for (let i = 0; i < 6; i++) {
    dates.push(add(date, { days: i }));
  }

  const handleClick = date => {
    dispatch(setDates(format(date, 'yyyy-MM-dd')));
    navigate(navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`));
  };

  return (
    <ul>
      {dates.map(date => (
        <li key={date}>
          <p>{format(date, 'eee')}</p>
          <button onClick={() => handleClick(date)}>
            {format(date, 'dd')}
          </button>
        </li>
      ))}
    </ul>
  );
};
