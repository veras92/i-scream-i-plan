// "1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера"

import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';

export const Header = () => {
  return (
    <>
      <div>
        <h1>Use Profile/ Calendar</h1>
      </div>
      <ThemeToggler />
      <UserInfo />
    </>
  );
};


// import { useLocation } from 'react-router-dom';
// import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
// import { UserInfo } from './components/UserInfo/UserInfo';

// function Header() {
//   const location = useLocation();

//   return (
//     <header>
//       {location.pathname === '/calendar' ? (
//         <h1>Calendar</h1>
//       ) : location.pathname === '/account' ? (
//         <h1>Use Profile</h1>
//       ) : (
//         <h1></h1>
//       )}
//       <ThemeToggler />
//       <UserInfo />
//     </header>
//   );
// }