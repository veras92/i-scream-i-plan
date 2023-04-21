import { formattedDay } from '../helpers';
import { Span, StyledDay, StyledTd } from './DaysWithTasks.styled';
import { TasksList } from './TasksList';

const { isToday, parseISO } = require('date-fns');

export function DaysWithTasks({ day, handleClick, setOpening, currentTask }) {
  return (
    <StyledTd onClick={e => handleClick(e, day.date)}>
      {day.tasks.length > 0 &&
        day.tasks.map(({ tasks }, index) => {
          return (
            <div key={index}>
              <TasksList
                tasks={tasks}
                openModal={setOpening}
                currentTask={currentTask}
              />
              {tasks.length > 2 && <Span>+{tasks.length - 2} tasks</Span>}
            </div>
          );
        })}
      <StyledDay className={isToday(parseISO(day.date)) && 'today'}>
        {formattedDay(day.date)}
      </StyledDay>
    </StyledTd>
  );
}
