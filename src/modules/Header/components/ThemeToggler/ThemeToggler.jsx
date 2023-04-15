// "1. Компонент відображає елемент для зміни значення теми зі світлої на темну та навпаки
// 2. Початкове значення теми - світла
// 3. Обрана тема записується в localStorage та використовується як активна при вході користувача в його обліковий запис"
import sprite from 'shared/icons/sprite.svg';
import { toggleTheme } from 'redux/theme/operations';
import { useDispatch } from 'react-redux';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleThemeChange}>
        <svg width="26" height="26">
          <use href={`${sprite}#icon-moon`} />
        </svg>
      </button>
    </div>
  );
};
