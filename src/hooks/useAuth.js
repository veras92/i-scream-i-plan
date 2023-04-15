import { useSelector } from 'react-redux';
import {
  selectAccessToken,
  selectIsLoggedIn,
  selectUserInfo,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUserInfo);
  const accessToken = useSelector(selectAccessToken);

  return {
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
