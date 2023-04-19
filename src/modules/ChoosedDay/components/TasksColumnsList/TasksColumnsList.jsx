//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { ColumnsWrapper, StyledColumn } from './TasksColumnsList.styled';

export const TasksColumnsList = () => {
  const tasks = useSelector(selectTasks);
  const date = useSelector(selectDate);

  const toDo = [];
  const inProgress = [];
  const done = [];

  tasks.forEach(task => {
    if (task.date === date) {
      task.tasks.forEach(task => {
        if (task.category === 'to-do') {
          toDo.push(task);
          return;
        }
        if (task.category === 'in-progress') {
          inProgress.push(task);
          return;
        }
        if (task.category === 'done') {
          done.push(task);
          return;
        }
      });
    }
  });

  return (
    <ColumnsWrapper>
      <StyledColumn>
        <TasksColumn type={'to-do'} tasks={toDo} />
      </StyledColumn>
      <StyledColumn>
        <TasksColumn type={'in-progress'} tasks={inProgress} />
      </StyledColumn>
      <StyledColumn>
        <TasksColumn type={'done'} tasks={done} />
      </StyledColumn>
    </ColumnsWrapper>
  );
};
