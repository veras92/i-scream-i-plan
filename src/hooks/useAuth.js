import { useSelector } from 'react-redux';
import {
  selectAccessToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserInfo,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUserInfo);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);

  return {
    isRefreshing,
    isLoggedIn,
    name,
    email,
    phone,
    birthday,
    skype,
    userImgUrl,
    accessToken,
  };
};
