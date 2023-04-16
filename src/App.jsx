import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { Loader } from 'shared/components/Loader/Loader';
import { router } from 'shared/services/createRouter';

export const App = () => {
  const { accessToken, isRefreshing } = useAuth();
  const [getUserInfo] = useLazyGetCurrentUserInfoQuery();

  useEffect(() => {
    const refreshUserInfo = (accessToken, getUserInfo) => {
      if (!accessToken) return;
      getUserInfo();
    };

    refreshUserInfo(accessToken, getUserInfo);
  }, [accessToken, getUserInfo]);

  return isRefreshing ? <Loader /> : <RouterProvider router={router} />;
};
