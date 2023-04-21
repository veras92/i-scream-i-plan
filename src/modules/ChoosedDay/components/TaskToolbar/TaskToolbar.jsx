// "1. Компонент рендерить список кнопок:
//  - переміщення картки в іншу групу - відкриває контекстне меню зі списком всіх груп окрім поточної.
// Клік по кнопці зі списку виконує запит на бекенд, в якому відбувається зміна ступеню виконання задачі.
// Успіх - закривається меню і картка переміщається з поточної групи в відповідну нову.
// Помилка - юзеру показується відповідне пушповідомлення.
// - редагування картки - відкриває TaskModal - з полями заповненими даними з поточного завдання.
// - видалення картки - виконує запит на бек, який видаляє завдання.
// Успіх - завдання видаляється зі списку на сторінці, юзеру показується пушповідомлення про видалення
// Помилка - юзеру показується відповідне пушповідомлення"
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { useDeleteTaskMutation } from 'redux/tasks/tasksApi';
import { useChangeTaskMutation } from 'redux/tasks/tasksApi';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import sprite from 'shared/icons/sprite.svg';
import {
  ButtonsWrapper,
  TaskAction,
  MoveButton,
  MoveAction,
  MoveWrapper,
  PopUp,
} from './TaskToolbar.styled';

export const TaskToolbar = ({ task }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const [isMenuOpened, setMenuOpening] = useState(false);

  const modalRef = useRef(null);
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        setMenuOpening(false);
      }
    };
    if (isMenuOpened) {
      window.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isMenuOpened]);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setMenuOpening(false);
    }
  };

  const [deleteTask] = useDeleteTaskMutation();
  const [changeTask] = useChangeTaskMutation();

  const date = useSelector(selectDate);

  const handleDeleteClick = async () => {
    await deleteTask(task._id);
  };

  const handleMoveClick = async category => {
    setMenuOpening(!isMenuOpened);
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

  const handleToggleModal = () => setModalOpening(!isModalOpened);

  return (
    <>
      <ButtonsWrapper>
        <TaskAction className={isMenuOpened ? 'active' : null}>
          <use
            href={`${sprite}#icon-arrow-circle-right`}
            onClick={() => handleMoveClick('done')}
          />
        </TaskAction>
        <TaskAction className={isModalOpened ? 'active' : null}>
          <use href={`${sprite}#icon-pencil`} onClick={handleToggleModal} />
        </TaskAction>
        <TaskAction>
          <use href={`${sprite}#icon-basket`} onClick={handleDeleteClick} />
        </TaskAction>
      </ButtonsWrapper>
      {isMenuOpened && task.category === 'to-do' && (
        <PopUp ref={modalRef}>
          <MoveWrapper>
            <MoveButton type="button" name="in-progress" onClick={onMenuClick}>
              In progress
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
          <MoveWrapper>
            <MoveButton type="button" name="done" onClick={onMenuClick}>
              Done
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
        </PopUp>
      )}
      {isMenuOpened && task.category === 'in-progress' && (
        <PopUp ref={modalRef}>
          <MoveWrapper>
            <MoveButton type="button" name="to-do" onClick={onMenuClick}>
              To do
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
          <MoveWrapper>
            <MoveButton type="button" name="done" onClick={onMenuClick}>
              Done
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
        </PopUp>
      )}
      {isMenuOpened && task.category === 'done' && (
        <PopUp ref={modalRef}>
          <MoveWrapper>
            <MoveButton type="button" name="in-progress" onClick={onMenuClick}>
              In progress
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
          <MoveWrapper>
            <MoveButton type="button" name="to-do" onClick={onMenuClick}>
              To do
              <MoveAction>
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </MoveAction>
            </MoveButton>
          </MoveWrapper>
        </PopUp>
      )}
      {isModalOpened && (
        <TaskModal
          date={date}
          type={TASK_MODAL_TYPES.edit}
          onCloseModal={handleToggleModal}
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
