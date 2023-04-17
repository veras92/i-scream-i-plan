import { setFileUrl } from 'shared/utils/setFileUrl';
import sprite from 'shared/icons/sprite.svg';
import { HiddenInput, Label, Svg } from './UserAvatarField.styled';
import { ErrorMessage } from '@hookform/error-message';

export const UserAvatarField = ({
  inputName,
  id,
  type,
  userName,
  register,
  currentAvatarUrl,
  setCurrentAvatarUrl,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor={id}>
        {!currentAvatarUrl ? (
          <p>
            <Svg>
              <use href={sprite + '#icon-user-check-01'} />
            </Svg>
          </p>
        ) : (
          <img src={currentAvatarUrl} alt="user_photo" />
        )}
      </Label>
      <HiddenInput
        id={id}
        {...register(inputName)}
        type={type}
        onChange={e => {
          const file = e.target.files[0];
          setFileUrl(file, setCurrentAvatarUrl);
          return e;
        }}
      />
      <ErrorMessage errors={errors} name="userImgUrl" />
      <h3>{userName}</h3>
      <p>User</p>
    </div>
  );
};
