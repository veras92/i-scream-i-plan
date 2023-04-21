import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { router } from 'shared/services/createRouter';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'shared/components/Loader/Loader';

export const App = () => {
  const [canEnter, setCanEnter] = useState(false);
  const { accessToken } = useAuth();
  const [refreshTokens] = useRefreshTokensMutation();

  useEffect(() => {
    const refreshToken = async () => {
      if (!accessToken) return setCanEnter(true);
      await refreshTokens().unwrap();
      setCanEnter(true);
    };
    refreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !canEnter ? <Loader /> : <RouterProvider router={router} />;
};
