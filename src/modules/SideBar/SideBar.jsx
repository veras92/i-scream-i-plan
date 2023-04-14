// "Модуль рендерить в собі компоненти:
//  - UserNav - блок основної навігації
//  - LogoutBtn - виходу з облікового запису"

import { LogoutBtn } from './components/LogoutBtn/LogoutBtn';
import { UserNav } from './components/UserNav/UserNav';
import goose from 'shared/icons/goose.svg';

export const SideBar = () => {
  return (
    <>
      <div>
      <img width="71" src={goose} alt="goose"/> 
      <h2>Goose Track</h2>
      <span>User Panel</span>
      </div>
      <UserNav />
      <LogoutBtn />
    </>
  );
};
