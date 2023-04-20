import { RegisterForm } from 'modules/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
