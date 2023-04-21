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
