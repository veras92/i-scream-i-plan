import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectDate } from 'redux/date/selectors';

const CalendarIndex = () => {
  const date = useSelector(selectDate);

  return <Navigate to={`month/${date}`} />;
};

export default CalendarIndex;
