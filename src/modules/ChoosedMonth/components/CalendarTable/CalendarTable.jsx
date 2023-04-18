// "1. Компонент отримує колекцію днів обраного місяця з задачами, вказаними для виконання на відповідні дні.
// 2. Якщо день має заплановані задачі, вони відображаються відповідними блоками всередині комірки дня.
// 3. Клік по комірці переадресовує юзера на відповідний день по маршруту /calendar/day/:date і показує модуль одного дня ChoosedDay з відповідною датою.
// Додатково:
// Клік по завданню з комірки, відкриває модалку для редагування даного завдання, заповнену даними з цього завдання."
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isToday,
  parseISO,
} from 'date-fns';
// import { Re } from 'react-router-dom';

import PropTypes from 'prop-types';
import { StyledDay, StyledListTasks, StyledTd } from './CalendarTable.styled';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setDates } from 'redux/date/dateSlice';

export default function CalendarTable({ tasks, currentDate }) {
  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));
  const firstDayOfMonth = getDay(startMonth) - 1;

  const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
  }));

  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, index) => (
    <td key={`empty-${index}`}></td>
  ));

  function formattedDay(date) {
    const day = date.split('-')[2];

    return day.startsWith('0') ? day.slice(1) : day;
  }
  const handleClick = date => {
    dispatch(setDates(date));
    navigate(`/calendar/day/${date}`);
  };
  function truncateString(str) {
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  }

  const rows = [];

  let cells = [...emptyCells];

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <StyledTd key={index} onClick={() => handleClick(day.date)}>
        {day.tasks.length > 0 &&
          day.tasks.map(({ tasks }, index) => {
            return (
              <StyledListTasks key={index}>
                {tasks.map(task => (
                  <li className={task.priority} key={task._id}>
                    {truncateString(task.title)}
                  </li>
                ))}
              </StyledListTasks>
            );
          })}
        <StyledDay className={isToday(parseISO(day.date)) && 'today'}>
          {formattedDay(day.date)}
        </StyledDay>
      </StyledTd>
    );

    if (cells.length === 7 || index === daysWithTasks.length - 1) {
      rows.push(<tr key={day.date}>{cells}</tr>);
      cells = [];
    }
  });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
CalendarTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          priority: PropTypes.string,
        })
      ),
    }).isRequired
  ),
  currentDate: PropTypes.string.isRequired,
};
