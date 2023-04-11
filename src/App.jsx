// import { lazy, Suspense } from 'react';

// const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
// const CalendarPage = lazy(() => import('./pages/CalendarPage/CalendarPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const MainLayout = lazy(() => import('./pages/MainLayout/MainLayout'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
