// "1. Компонент рендериться на маршрут /account
// 2. На сторінці знаходиться компонент форми UserForm"

import { UserForm } from 'modules/UserForm/UserForm';

export default function AccountPage() {
  return (
    <div>
      <UserForm />
    </div>
  );
}
