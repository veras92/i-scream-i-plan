// "1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnsTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку."

import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';

export const TasksColumn = ({ type, tasks }) => {
  return (
    <>
      <ColumnHeadBar type={type} />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn type={type} />
    </>
  );
};
