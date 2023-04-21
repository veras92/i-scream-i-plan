import { useWindowSize } from 'hooks/useWindowSize';
import { StyledListTasks } from './TasksList.styled';

export function TasksList({ tasks, openModal, currentTask }) {
  const size = useWindowSize();

  function truncateString(str) {
    if (size.width < 767) {
      return str.substring(0, 3) + '...';
    }
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  }
  return (
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
              openModal(true);
              currentTask(task);
            }}
          >
            {truncateString(task.title)}
          </li>
        );
      })}
    </StyledListTasks>
  );
}
