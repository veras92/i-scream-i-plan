import { ChoosedDay } from 'modules/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'modules/ChoosedMonth/ChoosedMonth';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<MainPage /> /* isLogin ? <MainPage /> : <MainLayout /> */}
        >
          <Route path={calendar} element={<CalendarPage />}>
            <Route index element={<CalendarIndex />} />
            <Route path={currentDate} element={<ChoosedMonth />} />
            <Route path={currentDay} element={<ChoosedDay />} />
          </Route>
        </Route>
        <Route path={register} element={<RegisterPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={account} element={<AccountPage />} />

        <Route path="*" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};
