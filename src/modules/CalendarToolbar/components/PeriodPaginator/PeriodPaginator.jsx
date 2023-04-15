// "1. Компонент рендерить блок навігації для переадресацї юзера на таблицю з задачами відповідно до обраного типу періоду day | month.
// 2. Кнопка що вказує поточний тип обраного періоду має активні стилі, як показано на макеті."
import { format } from 'date-fns';
import sprite from 'shared/icons/sprite.svg';

export const PeriodPaginator = ({ date, type, onChange }) => {
  const handleClick = e => {
    onChange(e.currentTarget.name);
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
            onClick={handleClick}
            disabled={shouldDisable}
          >
            <svg>
              <use href={`${sprite}#icon-smoll-arrow-left`} />
            </svg>
          </button>
          <button type="button" name="addition" onClick={handleClick}>
            <svg>
              <use href={`${sprite}#icon-smoll-arrow-right`} />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};
