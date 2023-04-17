//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { TasksColumn } from '../TasksColumn/TasksColumn';

export const TasksColumnsList = () => {
  const tasks = useSelector(selectTasks);

  const toDo = [];
  const inProgress = [];
  const done = [];

  tasks.forEach(task => {
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
  });

  return (
    <ul>
      <li>
        <TasksColumn type={'to-do'} tasks={toDo} />
      </li>
      <li>
        <TasksColumn type={'in-progress'} tasks={inProgress} />
      </li>
      <li>
        <TasksColumn type={'done'} tasks={done} />
      </li>
    </ul>
  );
};
