import { ChoosedDay } from 'modules/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'modules/ChoosedMonth/ChoosedMonth';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage/CalendarPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const MainLayout = lazy(() => import('./pages/MainLayout/MainLayout'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={<MainPage /> /* isLogin ? <MainPage /> : <MainLayout /> */}
        ></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        {/* ======розібратись  =======*/}
        <Route path="/calendar/month/:currentDate" element={<ChoosedMonth />} />
        <Route path="/calendar/day/:currentDay" element={<ChoosedDay />} />
        {/* ======розібратись  =======*/}
      </Routes>
    </Suspense>
  );
};
