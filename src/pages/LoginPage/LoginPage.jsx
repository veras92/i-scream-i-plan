// "Компонент рендериться на маршрут /login

// 1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Сторінка рендерить компоненти:
//  - LoginForm - блок з формою логінізації
//  - AuthNavigate - загальний компонент навігації для сторінок login/register"""
import { LoginForm } from 'modules/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
