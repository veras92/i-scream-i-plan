// "Модуль рендерить в собі компоненти:
//  - UserNav - блок основної навігації
//  - LogoutBtn - виходу з облікового запису"

import { LogoutBtn } from './components/LogoutBtn/LogoutBtn';
import { UserNav } from './components/UserNav/UserNav';
import goose from 'shared/icons/goose.svg';
import sprite from 'shared/icons/sprite.svg';

import {
  LogoTitle,
  SidebarWrapper,
  SidebarHeader,
  GooseImg,
  CloseIcon,
  SidebarSubTitle,
} from './SideBar.styled';

export const SideBar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <GooseImg src={goose} alt="goose" />
        <LogoTitle>Goose Track</LogoTitle>
        <CloseIcon>
          <use href={`${sprite}#icon-x-close`} />
        </CloseIcon>
      </SidebarHeader>
      <SidebarSubTitle>User Panel</SidebarSubTitle>
      <UserNav />
      <LogoutBtn />
    </SidebarWrapper>
  );
};
