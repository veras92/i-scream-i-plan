import { useState } from 'react';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import parse from 'date-fns/parse';
import sprite from 'shared/icons/sprite.svg';
import { StyledAddTaskBtn, AddTaskSvg } from './AddTaskBtn.styled';
export const AddTaskBtn = ({ type }) => {
  const [isOpened, setOpening] = useState(false);

  const date = useSelector(selectDate);

  const handleToggleModal = () => setOpening(!isOpened);

  return (
    <>
      <StyledAddTaskBtn type="button" onClick={handleToggleModal}>
        <AddTaskSvg>
          <use href={`${sprite}#icon-plus`} />
        </AddTaskSvg>{' '}
        Add Task
      </StyledAddTaskBtn>
      {isOpened && (
        <TaskModal
          date={parse(date, 'yyyy-MM-dd', new Date())}
          type={TASK_MODAL_TYPES.add}
          onCloseModal={handleToggleModal}
          category={type}
        />
      )}
    </>
  );
};
