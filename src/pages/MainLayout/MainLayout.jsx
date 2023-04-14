// "1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Компонент здійснює запит по данні користувача(email, name, id та т.і.), якщо під час рендеру компоненту ці данні відсутні в глобальному стейті
// 3. Комопонент рендерить:
//  - Header - модуль що відображається на всіх сторінках авторизованого юзера. Показує загальну інформацію та допоміжний інтерфейс роботи з обліковим записом.
//  - SideBar - модуль що відображається на всіх сторінках авторизованого юзера, на планшеті та мобілці знаходиться в бургер-меню. Показує навігацію між сторінками та кнопку виходу з облікового запису. "

import { Header } from 'modules/Header/Header';
import { SideBar } from 'modules/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <div>MainLayout</div>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
}
