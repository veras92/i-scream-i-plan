// "Компонент  в собі містить блок список елементів навігації за наступними маршрутами:
//  - /account - редіректить на AccountPage
//  - /calendar - редіректить на CalendarPage з модулем календаря місяця."
import sprite from 'shared/icons/sprite.svg';
import { NavList, StyledLink, NavIcon } from './UserNav.styled';

export const UserNav = () => {
  return (
    <>
      <NavList>
        <StyledLink to="/account">
          <NavIcon>
            <use href={`${sprite}#icon-user-check-01`} />
          </NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink to="/calendar">
          <NavIcon>
            <use href={`${sprite}#icon-calendar-check-02`} />
          </NavIcon>
          <span>Calendar</span>
        </StyledLink>
      </NavList>
    </>
  );
};
