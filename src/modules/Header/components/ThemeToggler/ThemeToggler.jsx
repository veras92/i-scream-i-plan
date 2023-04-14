// "1. Компонент відображає елемент для зміни значення теми зі світлої на темну та навпаки
// 2. Початкове значення теми - світла
// 3. Обрана тема записується в localStorage та використовується як активна при вході користувача в його обліковий запис"
import sprite from 'shared/icons/sprite.svg';

export const ThemeToggler = () => {
  return <div>
    <button>
    <svg width="26" height="26">
          <use href={`${sprite}#icon-moon`} />
    </svg>

      
    </button>
  </div>;
};
