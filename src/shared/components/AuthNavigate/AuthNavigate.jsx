// "1. Компонент отримує пропсами маршрут для редіректу та текстовий контент
// 2. Рендерить елемент навігації з відповідними налаштуваннями для редіректу на сторінки LoginPage/RegisterPage"

// import { Link } from 'react-router-dom';

export const AuthNavigate = ({ route, content }) => {
  return (
    <>
      <div>AuthNavigate</div>
      {/* <Link to={route}>{content}</Link> */}
    </>
  );
};
