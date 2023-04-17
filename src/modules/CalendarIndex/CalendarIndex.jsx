import { format } from 'date-fns';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectDate } from 'redux/date/selectors';

const CalendarIndex = () => {
  // const date = useSelector(selectDate);
  const today = new Date();
  const formattedDate = format(today, 'yyyy-MM-dd');

  return <Navigate to={`month/${formattedDate}`} />;
};

export default CalendarIndex;
