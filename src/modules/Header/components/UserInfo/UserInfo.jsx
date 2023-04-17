// "1. Компонент підписаний на глобальний стейт з якого отримує ім'я користувача та url з фото користувача
// 2. Компонент відображає ім'я користувача та його зображення/аватар.
// 3. Якщо зображення відсутнє на його місці повинна відображатись перша буква імені в верхньому регістрі"
import { Wrapper, UserName, UserPicture } from './UserInfo.styled';
export const UserInfo = () => {
  return (
    <Wrapper>
      <UserName>Name</UserName>
      <UserPicture href="#" alt="userPicture" />
    </Wrapper>
  );
};
