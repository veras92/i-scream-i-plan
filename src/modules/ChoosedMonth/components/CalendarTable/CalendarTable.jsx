import { format, isToday, parseISO } from 'date-fns';
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

import { useState } from 'react';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { useWindowSize } from 'hooks/useWindowSize';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { formattedDay } from './helpers';
import { EmptyCells } from './components/EmptyCells';

export default function CalendarTable({ tasks, currentDate }) {
  const [isOpened, setOpening] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { daysOfMonth, firstDayOfMonth } = useDaysOfMonth(currentDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const size = useWindowSize();

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
  }));

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

  let cells = EmptyCells(firstDayOfMonth);

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
