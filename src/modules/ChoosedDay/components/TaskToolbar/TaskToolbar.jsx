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

export const TaskToolbar = ({ task, otherCategories }) => {
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
      {isMenuOpened && (
        <PopUp ref={modalRef}>
          {otherCategories.map(category => {
            return (
              <MoveWrapper>
                <MoveButton type="button" name={category} onClick={onMenuClick}>
                  {category.slice(0, 1).toUpperCase() +
                    category.slice(1).replace('-', ' ')}
                  <MoveAction>
                    <use href={`${sprite}#icon-arrow-circle-right`} />
                  </MoveAction>
                </MoveButton>
              </MoveWrapper>
            );
          })}
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
