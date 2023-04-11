// "Компонент  в собі містить блок список елементів навігації за наступними маршрутами:
//  - /account - редіректить на AccountPage
//  - /calendar - редіректить на CalendarPage з модулем календаря місяця."

import { NavLink } from 'react-router-dom';

export const UserNav = () => {
  return (
    <>
      <div>UserNav</div>
      <nav>
        <NavLink to="/account">My account</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
      </nav>
    </>
  );
};
