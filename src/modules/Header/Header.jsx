import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  GooseTask,
  MotivationTask,
} from './Header.styled';

import { useLocation, useParams } from 'react-router-dom';
import sprite from 'shared/icons/sprite.svg';
import { useSelector } from 'react-redux';
import gooseTask from 'shared/icons/goose-task.svg';

import { selectTasks } from 'redux/tasks/selectors';

export const Header = ({ onToggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { currentDay } = useParams();
  const isCalendarPage = currentPath.startsWith('/calendar/day');

  const tasks = useSelector(selectTasks);

  const haveTasksToday = () => {
    const tasksForToday = tasks.filter(task => task.date === currentDay);
    if (tasksForToday.length > 0) {
      const tasksInProgress = tasksForToday[0].tasks.find(
        task => task.category === 'to-do' || task.category === 'in-progress'
      );

      return tasksInProgress;
    }
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }
  return (
    <>
      <Wrapper>
        {isCalendarPage && haveTasksToday() && (
          <GooseTask src={gooseTask} alt="goose" />
        )}
        <div>
          <SectionTitle>{title}</SectionTitle>

          {isCalendarPage && haveTasksToday() && (
            <MotivationTask>
              Let go of the past and focus on the present!
            </MotivationTask>
          )}
        </div>
        <Toggler
          onClick={() => {
            onToggle();
          }}
        >
          <use href={`${sprite}#icon-menu`} />
        </Toggler>
        <Info>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
    </>
  );
};
