import { LoginForm } from 'modules/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
