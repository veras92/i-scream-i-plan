import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { Loader } from 'shared/components/Loader/Loader';
import { router } from 'shared/services/createRouter';

export const App = () => {
  const { isRefreshing, accessToken } = useAuth();

  const [getUserInfo, { error }] = useLazyGetCurrentUserInfoQuery();
  const [refreshTokens] = useRefreshTokensMutation();

  useEffect(() => {
    const refreshUserInfo = (getUserInfo, refreshTokens) => {
      if (!accessToken) return;
      getUserInfo();
      if (error?.status === 401) {
        refreshTokens();
      }
    };
    refreshUserInfo(getUserInfo, refreshTokens);
  }, [accessToken, error, getUserInfo, refreshTokens]);

  return isRefreshing ? <Loader /> : <RouterProvider router={router} />;
};
