// "Компонент  в собі містить блок список елементів навігації за наступними маршрутами:
//  - /account - редіректить на AccountPage
//  - /calendar - редіректить на CalendarPage з модулем календаря місяця."
import sprite from 'shared/icons/sprite.svg';
import { NavList, StyledLink, NavIcon } from './UserNav.styled';
import { account, calendar } from 'shared/services/routes';

export const UserNav = ({ closeModal }) => {
  return (
    <>
      <NavList>
        <StyledLink to={account} onClick={() => closeModal()}>
          <NavIcon>
            <use href={`${sprite}#icon-user-check-01`} />
          </NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink to={calendar} onClick={() => closeModal()}>
          <NavIcon>
            <use href={`${sprite}#icon-calendar-check-02`} />
          </NavIcon>
          <span>Calendar</span>
        </StyledLink>
      </NavList>
    </>
  );
};
