import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <TaskColumnCard task={task} />
        </li>
      ))}
    </ul>
  );
};
