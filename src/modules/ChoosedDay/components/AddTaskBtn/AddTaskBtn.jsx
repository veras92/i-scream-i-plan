// "1. Компонент отримує в пропсах id групи завдань
// 2. Компонент рендерить блок розмітки кнопки.
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці"
import { useState } from 'react';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import parse from 'date-fns/parse';

export const AddTaskBtn = ({ type }) => {
  const [isOpened, setOpening] = useState(false);

  const date = useSelector(selectDate);

  const handleClick = () => setOpening(true);

  const handleClosure = () => setOpening(false);

  return (
    <>
      <button type="button" onClick={handleClick}>
        Add Task
      </button>
      {isOpened && (
        <TaskModal
          date={parse(date, 'yyyy-MM-dd', new Date())}
          type={TASK_MODAL_TYPES.add}
          onCloseModal={handleClosure}
          category={type}
        />
      )}
    </>
  );
};
