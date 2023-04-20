// "1. Компонент підписаний на глобальний стейт з якого отримує ім'я користувача та url з фото користувача
// 2. Компонент відображає ім'я користувача та його зображення/аватар.
// 3. Якщо зображення відсутнє на його місці повинна відображатись перша буква імені в верхньому регістрі"
import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
  ImgWrap,
} from './UserInfo.styled';
import { useAuth } from 'hooks/useAuth';

export const UserInfo = () => {
  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const { name, userImgUrl } = useAuth();

  const displayName = userImgUrl ? (
    <ImgWrap>
      <img src={userImgUrl} alt="UserPicture" />
    </ImgWrap>
  ) : (
    <BackgroundName className="initials">
      <UserNameIcon>{getInitials(name)}</UserNameIcon>
    </BackgroundName>
  );
  return (
    <Wrapper>
      <UserName>{name}</UserName>
      <UserPicture>{displayName}</UserPicture>
    </Wrapper>
  );
};
