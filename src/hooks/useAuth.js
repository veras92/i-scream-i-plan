import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserInfo } from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUserInfo);
  // const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    name,
    email,
    phone,
    birthday,
    skype,
    userImgUrl,
    // isRefreshing,
  };
};
