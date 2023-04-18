// "1. Компонент рендериться на маршрут /account
// 2. На сторінці знаходиться компонент форми UserForm"

import { UserForm } from 'modules/UserForm/UserForm';
import { Helmet } from 'react-helmet-async';

export default function AccountPage() {
  return (
    <div>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <UserForm />
    </div>
  );
}
