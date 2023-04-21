import { authApi, useLazyLogoutUserQuery } from 'redux/auth/authApi';
import { tasksApi } from 'redux/tasks/tasksApi';
import { reauthApi } from 'redux/auth/reauthApi';
import { useDispatch } from 'react-redux';

import { Svg, Button } from 'shared/styles/components';
import sprite from 'shared/icons/sprite.svg';
import { Wrap } from './LogoutBtn.styled';

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
    <Wrap>
      <Button type="button" onClick={handleLogout}>
        Log out
        <Svg>
          <use href={`${sprite}#icon-log-out`} />
        </Svg>
      </Button>
    </Wrap>
  );
};
