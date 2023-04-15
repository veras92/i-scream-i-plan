// "1. Компонент рендерить кнопку.
// 2. Клік по кнопці виконує запит на бекенд який видаляє активну сесію користувача.
// 3. Успішна відповідь переводить користувача в статус неавторизованого, змінюючи відповідне поле в глобальному сетейті, а також обнуляє всі данні авторизованого користувача  в глобальному стейті.
// 4. Відповідь з помилкою виводить відповідне пуш-повідомлення, і вилогінює користуваача на клієнті, як і в попередньому пункті."
import sprite from 'shared/icons/sprite.svg';
import { Svg } from './LogoutBtn.styled';
import { useLazyLogoutUserQuery } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { cleanStateOnLogout } from 'redux/auth/authSlice';

export const LogoutBtn = () => {
  const [logout] = useLazyLogoutUserQuery();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(cleanStateOnLogout());
    }
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        <Svg width="20" height="20">
          <use href={`${sprite}#icon-log-out`} />
        </Svg>
      </button>
    </div>
  );
};
