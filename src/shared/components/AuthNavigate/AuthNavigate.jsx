// "1. Компонент отримує пропсами маршрут для редіректу та текстовий контент
// 2. Рендерить елемент навігації з відповідними налаштуваннями для редіректу на сторінки LoginPage/RegisterPage"

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthNavigate = ({ route, content }) => (
  <Link to={route}>{content}</Link>
);

AuthNavigate.propTypes = {
  route: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};
