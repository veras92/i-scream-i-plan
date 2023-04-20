import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import withAuthRedirect from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ChoosedDay } from 'modules/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'modules/ChoosedMonth/ChoosedMonth';
import {
  account,
  calendar,
  currentDate,
  currentDay,
  login,
  register,
} from './routes';
import SharedLayout from 'shared/components/SharedLayout/SharedLayout';

const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const CalendarIndex = lazy(() =>
  import('../../modules/CalendarIndex/CalendarIndex')
);
const CalendarPage = lazy(() =>
  import('../../pages/CalendarPage/CalendarPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const MainLayout = lazy(() => import('../../pages/MainLayout/MainLayout'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const basename = '/i-scream-i-plan';
const AccountPageWithRedirect = withAuthRedirect(AccountPage, login);
const CalendarPageWithRedirect = withAuthRedirect(CalendarPage, '/');

const NotFoundPageWithRedirect = withAuthRedirect(MainPage, '/');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route
        index
        element={
          <RestrictedRoute redirectTo={calendar} component={<MainPage />} />
        }
      />

      <Route
        path={login}
        element={
          <RestrictedRoute redirectTo={calendar} component={<LoginPage />} />
        }
      />

      <Route
        path={register}
        element={
          <RestrictedRoute redirectTo={calendar} component={<RegisterPage />} />
        }
      />

      <Route element={<MainLayout />}>
        <Route path={account} element={<AccountPageWithRedirect />} />

        <Route path={calendar} element={<CalendarPageWithRedirect />}>
          <Route index element={<CalendarIndex />} />
          <Route path={currentDate} element={<ChoosedMonth />} />
          <Route path={currentDay} element={<ChoosedDay />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPageWithRedirect />} />
    </Route>
  ),

  { basename }
);
