//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, format, parse } from 'date-fns';
import { setDates } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/selectors';
import { Btn, Day, Item, List } from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const normalizedDate = useSelector(selectDate);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(add(date, { days: i }));
  }

  const handleClick = date => {
    dispatch(setDates(format(date, 'yyyy-MM-dd')));
    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  };

  function formattedDay(day) {
    return day.startsWith('0') ? day.slice(1) : day;
  }

  return (
    <List>
      {dates.map(date => (
        <Item key={date} item={format(date, 'eee').toUpperCase()}>
          <Day className="full-name">{format(date, 'eee').toUpperCase()}</Day>
          <Day className="short-name">{format(date, 'eee').slice(0, 1)}</Day>
          <Btn
            className={normalizedDate === format(date, 'yyyy-MM-dd') && 'today'}
            type="button"
            onClick={() => handleClick(date)}
          >
            {formattedDay(format(date, 'dd'))}
          </Btn>
        </Item>
      ))}
    </List>
  );
};
