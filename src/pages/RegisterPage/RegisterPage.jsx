// "Компонент рендериться на маршрут /register

// 1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Сторінка рендерить компоненти:
//  - RegisterForm - блок з формою реєстрації
//  - AuthNavigate - загальний компонент навігації для сторінок login/register"
import { RegisterForm } from 'modules/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Sing up</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
