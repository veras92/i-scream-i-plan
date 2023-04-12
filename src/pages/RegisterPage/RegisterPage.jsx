// "Компонент рендериться на маршрут /register

// 1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Сторінка рендерить компоненти:
//  - RegisterForm - блок з формою реєстрації
//  - AuthNavigate - загальний компонент навігації для сторінок login/register"
import { RegisterForm } from 'modules/RegisterForm/RegisterForm';
import { AuthNavigate } from 'shared/components/AuthNavigate/AuthNavigate';
import { ROUTES } from 'shared/services/routes';

export default function RegisterPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Sign Up</h1>
          <RegisterForm />
        </div>

        <AuthNavigate route={ROUTES.login} content="Log In" />
      </div>
    </div>
  );
}
