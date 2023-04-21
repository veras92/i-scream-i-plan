import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import {
  ColumnsWrapper,
  Conatainer,
  StyledColumn,
} from './TasksColumnsList.styled';

export const TasksColumnsList = ({ categories }) => {
  const tasks = useSelector(selectTasks);
  const date = useSelector(selectDate);

  const categoriesTasks = {};

  categories.forEach(category => {
    categoriesTasks[category] = [];
  });

  tasks.forEach(task => {
    if (task.date === date) {
      task.tasks.forEach(task => {
        categoriesTasks[task.category].push(task);
      });
    }
  });

  return (
    <Conatainer>
      <ColumnsWrapper>
        {categories.map((category, index) => (
          <StyledColumn key={index}>
            <TasksColumn
              type={category}
              tasks={categoriesTasks[category]}
              otherCategories={categories.filter(
                currentCategory => currentCategory !== category
              )}
            />
          </StyledColumn>
        ))}
      </ColumnsWrapper>
    </Conatainer>
  );
};
