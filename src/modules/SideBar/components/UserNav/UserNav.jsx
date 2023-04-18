// "Компонент  в собі містить блок список елементів навігації за наступними маршрутами:
//  - /account - редіректить на AccountPage
//  - /calendar - редіректить на CalendarPage з модулем календаря місяця."
import sprite from 'shared/icons/sprite.svg';
import { NavList, StyledLink, NavIcon } from './UserNav.styled';
import { useWindowSize } from 'pages/MainLayout/MainLayout';
import { account, calendar } from 'shared/services/routes';

export const UserNav = ({ closeSideBar }) => {
  const windowSize = useWindowSize();
  function closeSideBarOnMobile() {
    if (windowSize.width < 1440) {
      closeSideBar();
    }
  }
  return (
    <>
      <NavList>
        <StyledLink
          to={account}
          onClick={() => {
            closeSideBarOnMobile();
          }}
        >
          <NavIcon>
            <use href={`${sprite}#icon-user-check-01`} />
          </NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink
          to={calendar}
          onClick={() => {
            closeSideBarOnMobile();
          }}
        >
          <NavIcon>
            <use href={`${sprite}#icon-calendar-check-02`} />
          </NavIcon>
          <span>Calendar</span>
        </StyledLink>
      </NavList>
    </>
  );
};
