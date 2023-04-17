import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { Loader } from 'shared/components/Loader/Loader';
import { router } from 'shared/services/createRouter';

export const App = () => {
  const { accessToken, isRefreshing } = useAuth();
  const [getUserInfo] = useLazyGetCurrentUserInfoQuery();
  const [refreshTokens] = useRefreshTokensMutation();

  useEffect(() => {
    const refreshUserInfo = async (accessToken, getUserInfo, refreshTokens) => {
      if (!accessToken) return;
      try {
        await getUserInfo().unwrap();
      } catch (error) {
        if (error.status === 401) {
          await refreshTokens().unwrap();
        }
      }
    };

    refreshUserInfo(accessToken, getUserInfo, refreshTokens);
  }, [accessToken, getUserInfo, refreshTokens]);

  return isRefreshing ? <Loader /> : <RouterProvider router={router} />;
};
