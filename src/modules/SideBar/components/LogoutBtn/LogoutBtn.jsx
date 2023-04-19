// "1. Компонент рендерить кнопку.
// 2. Клік по кнопці виконує запит на бекенд який видаляє активну сесію користувача.
// 3. Успішна відповідь переводить користувача в статус неавторизованого, змінюючи відповідне поле в глобальному сетейті, а також обнуляє всі данні авторизованого користувача  в глобальному стейті.
// 4. Відповідь з помилкою виводить відповідне пуш-повідомлення, і вилогінює користуваача на клієнті, як і в попередньому пункті."
import { authApi, useLazyLogoutUserQuery } from 'redux/auth/authApi';
import { tasksApi } from 'redux/tasks/tasksApi';
import { reauthApi } from 'redux/auth/reauthApi';
import { useDispatch } from 'react-redux';

import { Svg, Button } from 'shared/styles/components';
import sprite from 'shared/icons/sprite.svg';

export const LogoutBtn = () => {
  const [logout] = useLazyLogoutUserQuery();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(tasksApi.util.resetApiState());
    dispatch(authApi.util.resetApiState());
    dispatch(reauthApi.util.resetApiState());
    logout();
  };

  return (
    <div>
      <Button type="button" onClick={handleLogout}>
        Log out
        <Svg>
          <use href={`${sprite}#icon-log-out`} />
        </Svg>
      </Button>
    </div>
  );
};
