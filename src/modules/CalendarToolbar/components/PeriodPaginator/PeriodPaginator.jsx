// "1. Компонент рендерить блок навігації для переадресацї юзера на таблицю з задачами відповідно до обраного типу періоду day | month.
// 2. Кнопка що вказує поточний тип обраного періоду має активні стилі, як показано на макеті."
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format, parse, add, sub } from 'date-fns';
import { setDates } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/selectors';
import sprite from 'shared/icons/sprite.svg';

export const PeriodPaginator = ({ type }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const normalizedDate = useSelector(selectDate);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate = e => {
    if (e.target.name === 'addition') {
      if (type === 'day') {
        dispatch(setDates(format(add(date, { days: 1 }), 'yyyy-MM-dd')));
        navigate(`${type}/${format(date, 'yyyy-MM-dd')}`);
        return;
      }
      dispatch(setDates(format(add(date, { months: 1 }), 'yyyy-MM-dd')));
      navigate(`${type}/${format(date, 'yyyy-MM-dd')}`);
      return;
    }
    if (type === 'day') {
      dispatch(setDates(format(sub(date, { days: 1 }), 'yyyy-MM-dd')));
      navigate(`${type}/${format(date, 'yyyy-MM-dd')}`);
      return;
    }
    dispatch(setDates(format(sub(date, { months: 1 }), 'yyyy-MM-dd')));
    navigate(`${type}/${format(date, 'yyyy-MM-dd')}`);
  };

  const currentDate = format(date, 'dd MMMM yyyy');

  const shouldDisable = date < Date.now();

  return (
    <>
      <p>{type === 'month' ? currentDate.slice(3) : currentDate}</p>
      <ul>
        <li></li>
        <li>
          <button
            type="button"
            name="subtraction"
            onClick={onChangeDate}
            disabled={shouldDisable}
          >
            <svg>
              <use href={`${sprite}#icon-smoll-arrow-left`} />
            </svg>
          </button>
          <button type="button" name="addition" onClick={onChangeDate}>
            <svg>
              <use href={`${sprite}#icon-smoll-arrow-right`} />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};
