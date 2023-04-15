import { Navigate } from 'react-router-dom';
import format from 'date-fns/format';

const CalendarIndex = () => {
  return <Navigate to={`month/${format(Date.now(), 'dd-MM-yyyy')}`} />;
};

export default CalendarIndex;
