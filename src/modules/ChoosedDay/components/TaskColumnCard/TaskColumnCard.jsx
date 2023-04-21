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

export const TaskColumnCard = ({ task, otherCategories }) => {
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
        <TaskToolbar task={task} otherCategories={otherCategories} />
      </CardInfo>
    </TaskCard>
  );
};
