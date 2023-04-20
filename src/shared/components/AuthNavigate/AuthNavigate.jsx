
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthNavigate = ({ route, content }) => (
  <Link to={route}>{content}</Link>
);

AuthNavigate.propTypes = {
  route: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};
