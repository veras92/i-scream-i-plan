// "1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати.
// 2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно.
// 3. Клік по кнопках змінює дату в залежності від типу періоду:
//  - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця
//  - day - змінює дату поточного дня  на дату попереднього/наступного дня
// 4. Компонент форматує період:
//  - month - MARCH 2023
//  - day - 6 MARCH 2023"
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation, useParams } from 'react-router-dom';

export const PeriodTypeSelect = ({ onChangeType }) => {
  const date = useSelector(selectDate);

  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      <Item className={isMonthRoute && 'active'}>
        <StyledNavLink
          to={`month/${date}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item className={isDayRoute && 'active'}>
        <StyledNavLink to={`day/${date}`} onClick={() => onChangeType('day')}>
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};
