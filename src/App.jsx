import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { authApi, useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { reauthApi, useRefreshTokensMutation } from 'redux/auth/reauthApi';
import { tasksApi } from 'redux/tasks/tasksApi';
import { Loader } from 'shared/components/Loader/Loader';
import { router } from 'shared/services/createRouter';

export const App = () => {
  const { accessToken } = useAuth();
  const dispatch = useDispatch();

  const [getUserInfo, { error, isLoading: isUserRefreshing }] =
    useLazyGetCurrentUserInfoQuery();
  const [
    refreshTokens,
    { isLoading: isTokenRefreshing, isSuccess: isRefreshTokenSuccess },
  ] = useRefreshTokensMutation();

  useEffect(() => {
    const refreshUserInfo = async (getUserInfo, accessToken) => {
      if (!accessToken) return;
      if (!error) getUserInfo();
      if (error?.status === 401) {
        refreshTokens();
        if (isRefreshTokenSuccess) {
          getUserInfo();
        } else {
          dispatch(tasksApi.util.resetApiState());
          dispatch(authApi.util.resetApiState());
          dispatch(reauthApi.util.resetApiState());
        }
      }
    };
    refreshUserInfo(getUserInfo, accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, error, isRefreshTokenSuccess]);

  return isUserRefreshing || isTokenRefreshing ? (
    <Loader />
  ) : (
    <RouterProvider router={router} />
  );
};
