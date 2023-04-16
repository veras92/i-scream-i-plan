import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

function withAuthRedirect(Component, redirectTo) {
  const ComponentWithRedirect = props => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Component {...props} /> : <Navigate to={redirectTo} />;
  };

  return ComponentWithRedirect;
}

export default withAuthRedirect;
