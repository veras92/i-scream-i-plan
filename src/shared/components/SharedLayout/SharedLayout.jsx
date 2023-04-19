import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

const SharedLayout = () => {
  const mode = useSelector(selectTheme);
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      <ToastContainer theme={mode} autoClose={3500} hideProgressBar={true} />
    </Suspense>
  );
};

export default SharedLayout;
