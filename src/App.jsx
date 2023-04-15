import { useAuth } from 'hooks/useAuth';
import { ChoosedDay } from 'modules/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'modules/ChoosedMonth/ChoosedMonth';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
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
  const { accessToken, isLoggedIn, isRefreshing } = useAuth();
  const [getUserInfo] = useLazyGetCurrentUserInfoQuery();

  useEffect(() => {
    const refreshUserInfo = (accessToken, getUserInfo) => {
      if (!accessToken) return;
      getUserInfo();
    };

    refreshUserInfo(accessToken, getUserInfo);
  }, [accessToken, getUserInfo]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {!isLoggedIn && <Route path="/" element={<MainPage />} />}

        <Route path="/" element={<MainLayout />}>
          <Route
            path={account}
            element={
              <PrivateRoute redirectTo={login} component={<AccountPage />} />
            }
          />
          <Route
            path={calendar}
            element={
              <PrivateRoute redirectTo={login} component={<CalendarPage />} />
            }
          >
            <Route index element={<CalendarIndex />} />
            <Route
              path={currentDate}
              element={
                <PrivateRoute redirectTo={login} component={<ChoosedMonth />} />
              }
            />
            <Route
              path={currentDay}
              element={
                <PrivateRoute redirectTo={login} component={<ChoosedDay />} />
              }
            />
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
          path="*"
          element={
            <RestrictedRoute redirectTo={calendar} component={<MainPage />} />
          }
        />
      </Routes>
    </Suspense>
  );
};
