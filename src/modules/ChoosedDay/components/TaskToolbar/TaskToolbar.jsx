// "1. Компонент рендерить список кнопок:
//  - переміщення картки в іншу групу - відкриває контекстне меню зі списком всіх груп окрім поточної.
// Клік по кнопці зі списку виконує запит на бекенд, в якому відбувається зміна ступеню виконання задачі.
// Успіх - закривається меню і картка переміщається з поточної групи в відповідну нову.
// Помилка - юзеру показується відповідне пушповідомлення.
// - редагування картки - відкриває TaskModal - з полями заповненими даними з поточного завдання.
// - видалення картки - виконує запит на бек, який видаляє завдання.
// Успіх - завдання видаляється зі списку на сторінці, юзеру показується пушповідомлення про видалення
// Помилка - юзеру показується відповідне пушповідомлення"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { useDeleteTaskMutation } from 'redux/tasks/tasksApi';
import { useChangeTaskMutation } from 'redux/tasks/tasksApi';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { parse } from 'date-fns';

export const TaskToolbar = ({ task }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const [isMenuOpened, setMenuOpening] = useState(false);

  const [deleteTask] = useDeleteTaskMutation();
  const [changeTask] = useChangeTaskMutation();

  const date = useSelector(selectDate);

  const handleEditClick = () => setModalOpening(true);

  const handleDeleteClick = async () => {
    await deleteTask(task._id);
  };

  const handleMoveClick = async category => {
    setMenuOpening(true);
  };

  const onMenuClick = async e => {
    const { title, start, end, priority, date } = task;
    await changeTask({
      id: task._id,
      task: {
        title,
        start,
        end,
        priority,
        date,
        category: e.currentTarget.name,
      },
    });
    setMenuOpening(false);
  };

  const handleClosure = () => setModalOpening(false);

  return (
    <>
      <button type="button" onClick={() => handleMoveClick('done')}>
        Move
      </button>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
      <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
      {isMenuOpened && task.category === 'to-do' && (
        <ul>
          <li>
            <button type="button" name="in-progress" onClick={onMenuClick}>
              In progress
            </button>
          </li>
          <li>
            <button type="button" name="done" onClick={onMenuClick}>
              Done
            </button>
          </li>
        </ul>
      )}
      {isMenuOpened && task.category === 'in-progress' && (
        <ul>
          <li>
            <button type="button" name="to-do" onClick={onMenuClick}>
              To do
            </button>
          </li>
          <li>
            <button type="button" name="done" onClick={onMenuClick}>
              Done
            </button>
          </li>
        </ul>
      )}
      {isMenuOpened && task.category === 'done' && (
        <ul>
          <li>
            <button type="button" name="in-progress" onClick={onMenuClick}>
              In progress
            </button>
          </li>
          <li>
            <button type="button" name="to-do" onClick={onMenuClick}>
              To do
            </button>
          </li>
        </ul>
      )}
      {isModalOpened && (
        <TaskModal
          date={date}
          type={TASK_MODAL_TYPES.edit}
          onCloseModal={handleClosure}
          id={task._id}
          title={task.title}
          start={task.start}
          end={task.end}
          priority={task.priority}
          category={task.category}
        />
      )}
    </>
  );
};
