import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';

export const TasksColumn = ({ type, tasks, otherCategories }) => {
  return (
    <>
      <ColumnHeadBar type={type} />
      {tasks.length > 0 && (
        <ColumnsTasksList tasks={tasks} otherCategories={otherCategories} />
      )}
      <AddTaskBtn type={type} />
    </>
  );
};
