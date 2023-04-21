import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { OverflowWrapper, StyledTable } from './CalendarTable.styled';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setDates } from 'redux/date/dateSlice';
import { useState } from 'react';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { EmptyCells } from './components/EmptyCells';
import { DaysWithTasks } from './components/DaysWithTasks';

export default function CalendarTable({ tasks, currentDate }) {
  const [isOpened, setOpening] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { daysOfMonth, firstDayOfMonth } = useDaysOfMonth(currentDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const formattedDate = () => {
    if (selectedTask) {
      const date = new Date(selectedTask.date);
      const formattedDate = format(date, 'yyyy-MM-dd');
      return formattedDate;
    }
  };

  const handleToggleModal = () => {
    setOpening(!isOpened);
  };

  const currentTask = data => {
    setSelectedTask(data);
  };

  const rows = [];

  let cells = EmptyCells(firstDayOfMonth);

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <DaysWithTasks
        key={index}
        setOpening={setOpening}
        currentTask={currentTask}
        handleClick={handleClick}
        day={day}
      />
    );

    if (cells.length === 7 || index === daysWithTasks.length - 1) {
      rows.push(<tr key={day.date}>{cells}</tr>);
      cells = [];
    }
  });

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
