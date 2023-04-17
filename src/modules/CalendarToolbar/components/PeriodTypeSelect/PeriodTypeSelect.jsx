// "1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати.
// 2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно.
// 3. Клік по кнопках змінює дату в залежності від типу періоду:
//  - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця
//  - day - змінює дату поточного дня  на дату попереднього/наступного дня
// 4. Компонент форматує період:
//  - month - MARCH 2023
//  - day - 6 MARCH 2023"
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectDate } from 'redux/date/selectors';

export const PeriodTypeSelect = ({ onChangeType }) => {
  const date = useSelector(selectDate);

  const today = new Date();
  const formattedDate = format(today, 'yyyy-MM-dd');

  return (
    <ul>
      <li>
        <NavLink
          to={`month/${formattedDate}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </NavLink>
      </li>
      <li>
        <NavLink to={`day/${date}`} onClick={() => onChangeType('day')}>
          Day
        </NavLink>
      </li>
    </ul>
  );
};
