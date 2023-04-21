import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { useLazyGetCurrentUserInfoQuery } from 'redux/auth/authApi';
import { Loader } from '../Loader/Loader';
import { useAuth } from 'hooks/useAuth';

const SharedLayout = () => {
  const mode = useSelector(selectTheme);
  const { accessToken } = useAuth();
  const [getUserInfo, { isLoading }] = useLazyGetCurrentUserInfoQuery();

  useEffect(() => {
    if (accessToken) getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
          <ToastContainer
            theme={mode}
            autoClose={3500}
            hideProgressBar={true}
          />
        </Suspense>
      )}
    </>
  );
};

export default SharedLayout;
