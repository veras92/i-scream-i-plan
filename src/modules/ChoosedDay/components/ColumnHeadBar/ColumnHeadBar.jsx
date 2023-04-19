// "1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі."
import { useState } from 'react';
import { useSelector } from 'react-redux';
import parse from 'date-fns/parse';
import { selectDate } from 'redux/date/selectors';
import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import sprite from 'shared/icons/sprite.svg';
import {
  ColumnTitleWrapper,
  ColumnTitle,
  AddButton,
  StyledAddIcon,
} from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ type }) => {
  const normalizeTitle = type => {
    switch (type) {
      case 'to-do':
        return 'To do';
      case 'in-progress':
        return 'In progress';
      case 'done':
        return 'Done';
      default:
        return 'Unknown';
    }
  };

  const [isOpened, setOpening] = useState(false);

  const date = useSelector(selectDate);

  const handleToggleModal = () => setOpening(!isOpened);

  return (
    <ColumnTitleWrapper>
      <ColumnTitle>{normalizeTitle(type)}</ColumnTitle>
      <AddButton type="button" onClick={handleToggleModal}>
        <StyledAddIcon>
          <use href={`${sprite}#icon-plus-circle`} />
        </StyledAddIcon>
      </AddButton>
      {isOpened && (
        <TaskModal
          date={parse(date, 'yyyy-MM-dd', new Date())}
          type={TASK_MODAL_TYPES.add}
          onCloseModal={handleToggleModal}
          category={type}
        />
      )}
    </ColumnTitleWrapper>
  );
};
