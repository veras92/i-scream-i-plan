import { CalendarToolbar } from 'modules/CalendarToolbar/CalendarToolbar';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Loader } from 'shared/components/Loader/Loader';

export default function CalendarPage() {
  return (
    <div>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <CalendarToolbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
