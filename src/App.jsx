import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { Loader } from 'shared/components/Loader/Loader';
import { router } from 'shared/services/createRouter';

export const App = () => {
  const { accessToken } = useAuth();

  const [getUserInfo, { error, isLoading: isUserRefreshing }] =
    useLazyGetCurrentUserInfoQuery();
  const [refreshTokens, { isLoading: isTokenRefreshing }] =
    useRefreshTokensMutation();

  useEffect(() => {
    const refreshUserInfo = (getUserInfo, refreshTokens, accessToken) => {
      if (!accessToken) return;
      getUserInfo();
      if (error?.status === 401) {
        refreshTokens();
      }
    };
    refreshUserInfo(getUserInfo, refreshTokens, accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, error]);

  return isUserRefreshing || isTokenRefreshing ? (
    <Loader />
  ) : (
    <RouterProvider router={router} />
  );
};
