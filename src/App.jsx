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
    const refreshUserInfo = async (getUserInfo, refreshTokens) => {
      await refreshTokens().unwrap();
      await getUserInfo().unwrap();
    };
    if (!accessToken) return;
    refreshUserInfo(getUserInfo, refreshTokens);
  }, [accessToken, getUserInfo, refreshTokens]);

  return isRefreshing ? <Loader /> : <RouterProvider router={router} />;
};
