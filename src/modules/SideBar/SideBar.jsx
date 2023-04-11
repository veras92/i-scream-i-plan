// "Модуль рендерить в собі компоненти:
//  - UserNav - блок основної навігації
//  - LogoutBtn - виходу з облікового запису"

import { LogoutBtn } from './components/LogoutBtn/LogoutBtn';
import { UserNav } from './components/UserNav/UserNav';

export const SideBar = () => {
  return (
    <>
      <div>SideBar</div>
      <UserNav />
      <LogoutBtn />
    </>
  );
};
