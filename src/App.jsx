import { useAuth } from 'hooks/useAuth';
import { ChoosedDay } from 'modules/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'modules/ChoosedMonth/ChoosedMonth';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { setCredentialsOnGetUserInfo } from 'redux/auth/authSlice';
import { Loader } from 'shared/components/Loader/Loader';
import { PrivateRoute } from 'shared/services/PrivateRoute';
import { RestrictedRoute } from 'shared/services/RestrictedRoute';
import {
  account,
  calendar,
  currentDate,
  currentDay,
  login,
  register,
} from 'shared/services/routes';

const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CalendarIndex = lazy(() =>
  import('./modules/CalendarIndex/CalendarIndex')
);
const CalendarPage = lazy(() => import('./pages/CalendarPage/CalendarPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MainLayout = lazy(() => import('./pages/MainLayout/MainLayout'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

export const App = () => {
  const { accessToken, isLoggedIn } = useAuth();
  const [getUserInfo, { isLoading: isGettingUserInfo }] =
    useLazyGetCurrentUserInfoQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUserInfo = async getUserInfo => {
      if (!accessToken) return;
      try {
        const getUserInfoResponse = await getUserInfo().unwrap();
        dispatch(setCredentialsOnGetUserInfo(getUserInfoResponse));
        console.log('refreshed');
      } catch (error) {
        console.log(error);
      }
    };
    refreshUserInfo(getUserInfo);
  }, [accessToken, dispatch, getUserInfo]);

  const StartPage = isLoggedIn ? <MainLayout /> : <MainPage />;
  return isGettingUserInfo ? (
    <Loader />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={StartPage /* isLogin ? <MainPage /> : <MainLayout /> */}
        >
          <Route
            path={calendar}
            element={
              <PrivateRoute redirectTo={login} component={<CalendarPage />} />
            }
          >
            <Route index element={<CalendarIndex />} />
            <Route path={currentDate} element={<ChoosedMonth />} />
            <Route path={currentDay} element={<ChoosedDay />} />
          </Route>
        </Route>
        <Route
          path={register}
          element={
            <RestrictedRoute
              redirectTo={calendar}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={login}
          element={
            <RestrictedRoute redirectTo={calendar} component={<LoginPage />} />
          }
        />
        <Route
          path={account}
          element={
            <PrivateRoute redirectTo={login} component={<AccountPage />} />
          }
        />

        <Route path="*" element={StartPage} />
      </Routes>
    </Suspense>
  );
};
