//  - MonthCalendarHead - дні тижня без дат
import { StyledItem, StyledList } from './MonthCalendarHead.styled';

export default function MonthCalendarHead() {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'sat', 'sun'];

  return (
    <StyledList>
      {daysOfWeek.map(day => (
        <StyledItem item={day.toUpperCase()} key={day}>
          <span className="full-name">{day.toUpperCase()}</span>
          <span className="short-name">{day.toUpperCase().slice(0, 1)}</span>
        </StyledItem>
      ))}
    </StyledList>
  );
}
