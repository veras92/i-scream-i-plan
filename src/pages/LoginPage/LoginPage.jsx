// "Компонент рендериться на маршрут /login

// 1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Сторінка рендерить компоненти:
//  - LoginForm - блок з формою логінізації
//  - AuthNavigate - загальний компонент навігації для сторінок login/register"""
import { LoginForm } from 'modules/LoginForm/LoginForm';
// import { AuthNavigate } from 'shared/components/AuthNavigate/AuthNavigate';
// import { ROUTES } from 'shared/services/routes';

export default function LoginPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Log In</h1>
          <LoginForm />
        </div>
        {/* <AuthNavigate route={ROUTES.register} content="Sign Up" /> */}
      </div>
    </div>
  );
}
