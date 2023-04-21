import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { router } from 'shared/services/createRouter';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'shared/components/Loader/Loader';

export const App = () => {
  const { accessToken } = useAuth();
  const [refreshTokens, { isLoading: isTokenRefreshing }] =
    useRefreshTokensMutation();

  useEffect(() => {
    const refreshToken = () => {
      if (!accessToken) return;
      refreshTokens();
    };
    refreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isTokenRefreshing ? <Loader /> : <RouterProvider router={router} />;
};
