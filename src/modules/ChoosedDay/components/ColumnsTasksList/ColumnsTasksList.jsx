import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';

export const ColumnsTasksList = ({ tasks, otherCategories }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <TaskColumnCard task={task} otherCategories={otherCategories} />
        </li>
      ))}
    </ul>
  );
};
