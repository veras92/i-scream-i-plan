// "1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера"

import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import { Wrapper, Info, SectionTitle } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith ('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }
  return (
    <>
      <Wrapper>
        <SectionTitle>{title}</SectionTitle>

        <Info>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
    </>
  );
};
