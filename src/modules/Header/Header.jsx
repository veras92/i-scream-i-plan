// "1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера"

import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import { Wrapper, Info, SectionTitle, Toggler, GooseTask, MotivationTask } from './Header.styled';
import { useLocation } from 'react-router-dom';
import sprite from 'shared/icons/sprite.svg';

import { useSelector } from 'react-redux';
import { selectTasksForToday } from '../../redux/tasks/tasksSlice';
import gooseTask from 'shared/icons/goose-task.svg';

export const Header = ({ onToggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const tasksForToday = useSelector(selectTasksForToday);

  const isCalendarPage = currentPath.startsWith('/calendar/');
  
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
        {isCalendarPage && tasksForToday.length > 0 && <GooseTask src={gooseTask} alt="goose"/>}
        <div>
        <SectionTitle>{title}</SectionTitle>
        {isCalendarPage && tasksForToday.length > 0 && <MotivationTask>Let go of the past and focus on the present!</MotivationTask>}
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
