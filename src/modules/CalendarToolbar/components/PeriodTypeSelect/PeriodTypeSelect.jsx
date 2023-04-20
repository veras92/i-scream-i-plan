import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';

export const PeriodTypeSelect = ({ onChangeType }) => {
  const date = useSelector(selectDate);

  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      <Item>
        <StyledNavLink
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`month/${date}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${date}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};
