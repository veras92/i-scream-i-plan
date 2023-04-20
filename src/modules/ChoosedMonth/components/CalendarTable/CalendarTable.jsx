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

import PropTypes from 'prop-types';
import {
  OverflowWrapper,
  Span,
  StyledDay,
  StyledListTasks,
  StyledTable,
  StyledTd,
} from './CalendarTable.styled';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setDates } from 'redux/date/dateSlice';
import { useWindowSize } from 'pages/MainLayout/MainLayout';
import { useState } from 'react';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';

export default function CalendarTable({ tasks, currentDate }) {
  const [isOpened, setOpening] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));
  const firstDayOfMonth = getDay(startMonth) - 1;

  const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const size = useWindowSize();

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
  const handleClick = (e, date) => {
    const { currentTarget, target } = e;

    if (currentTarget === target) {
      dispatch(setDates(date));
      navigate(`/calendar/day/${date}`);
    }
  };

  const handleToggleModal = () => {
    setOpening(!isOpened);
  };
  function truncateString(str) {
    if (size.width < 767) {
      return str.substring(0, 3) + '...';
    }
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  }

  const currentTask = data => {
    setSelectedTask(data);
  };

  const rows = [];

  let cells = [...emptyCells];

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <StyledTd key={index} onClick={e => handleClick(e, day.date)}>
        {day.tasks.length > 0 &&
          day.tasks.map(({ tasks }, index) => {
            return (
              <div key={index}>
                <StyledListTasks>
                  {tasks.map((task, index) => {
                    if (index >= 2) {
                      return null;
                    }
                    return (
                      <li
                        key={task._id}
                        className={task.priority}
                        onClick={() => {
                          setOpening(true);
                          currentTask(task);
                        }}
                      >
                        {truncateString(task.title)}
                      </li>
                    );
                  })}
                </StyledListTasks>
                {tasks.length > 2 && <Span>+{tasks.length - 2} tasks</Span>}
              </div>
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

  const formattedDate = () => {
    if (selectedTask) {
      const date = new Date(selectedTask.date);
      const formattedDate = format(date, 'yyyy-MM-dd');
      return formattedDate;
    }
  };

  return (
    <>
      <OverflowWrapper>
        <StyledTable>
          <tbody>{rows}</tbody>
        </StyledTable>
      </OverflowWrapper>
      {isOpened && (
        <TaskModal
          date={formattedDate()}
          type={TASK_MODAL_TYPES.edit}
          onCloseModal={handleToggleModal}
          category={selectedTask.category}
          id={selectedTask._id}
          title={selectedTask.title}
          start={selectedTask.start}
          end={selectedTask.end}
          priority={selectedTask.priority}
        />
      )}
    </>
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
