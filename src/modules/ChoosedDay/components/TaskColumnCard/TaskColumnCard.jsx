// "1. Компонент отримує в пропсах дані необхідні для створення картки.
// 2. Компонент підписаний на url аватару юзера
// 3. Компонент рендерить блоки:
//  - розмітку з описом завдання, який має фіксовану висоту і текст з описом, якщо той не вміщається, обрізається та показуються три крапки.
//  - аватар юзера.
//  - пріоритет завдання, з фоном відповідного кольору.
//  - TaskToolbar - інетрфейс для роботи з карткою
//  - TaskModal - модалка з формою для редагування завдання."
import { useAuth } from 'hooks/useAuth';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';

import {
  TaskCard,
  CardTitle,
  PriorityTitle,
  UserLogo,
  CardInfo,
  StyledInfo,
} from './TaskColumnCard.styled';

export const TaskColumnCard = ({ task }) => {
  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const { name, userImgUrl } = useAuth();

  const displayName = userImgUrl ? (
    <img src={userImgUrl} alt="UserPicture" />
  ) : (
    <p className="initials">{getInitials(name)}</p>
  );

  return (
    <TaskCard>
      <CardTitle>{task.title}</CardTitle>
      <CardInfo>
        <StyledInfo>
          <UserLogo>{displayName}</UserLogo>

          <PriorityTitle>{task.priority}</PriorityTitle>
        </StyledInfo>
        <TaskToolbar task={task} />
      </CardInfo>
    </TaskCard>
  );
};
