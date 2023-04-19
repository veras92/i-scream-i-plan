import { setFileUrl } from 'shared/utils/setFileUrl';
import sprite from 'shared/icons/sprite.svg';
import {
  HiddenInput,
  Label,
  Svg,
  UserAvatarWrapper,
} from './UserAvatarField.styled';
import { ErrorMessage } from '@hookform/error-message';

export const UserAvatarField = ({
  userName,
  inputName,
  type,
  id,
  currentAvatarUrl,
  setCurrentAvatarUrl,
  register,
  errors,
}) => {
  return (
    <UserAvatarWrapper>
      <ErrorMessage errors={errors} name={inputName} />
      <Label htmlFor={id}>
        {!currentAvatarUrl ? (
          <p>
            <Svg>
              <use href={`${sprite}#icon-user`} />
            </Svg>
          </p>
        ) : (
          <img src={currentAvatarUrl} alt="user_photo" />
        )}
      </Label>
      <HiddenInput
        {...register(inputName)}
        id={id}
        type={type}
        // accept="image/*"
        onChange={e => {
          const file = e.target.files[0];
          setFileUrl(file, setCurrentAvatarUrl);
          return e;
        }}
      />

      <h3>{userName}</h3>
      <p>User</p>
    </UserAvatarWrapper>
  );
};
