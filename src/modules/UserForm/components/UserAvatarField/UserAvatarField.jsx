import { setFileUrl } from 'shared/utils/setFileUrl';
import sprite from 'shared/icons/sprite.svg';
import {
  HiddenInput,
  Label,
  Svg,
  UserAvatarWrapper,
  InfoWrapper,
} from './UserAvatarField.styled';
import { ErrorMessage } from '@hookform/error-message';
import { StyledError } from './UserAvatarField.styled';
export const UserAvatarField = ({
  userName,
  inputName,
  type,
  id,
  currentAvatarUrl,
  setCurrentAvatarUrl,
  setIsDisabled,
  register,
  errors,
}) => {
  return (
    <UserAvatarWrapper>
      <StyledError>
        <ErrorMessage errors={errors} name={inputName} />
      </StyledError>
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
        accept="image/*"
        onChange={e => {
          const file = e.target.files[0];
          setFileUrl(file, setCurrentAvatarUrl);
          setIsDisabled(false);
          return e;
        }}
      />
      <InfoWrapper>
        <h3>{userName}</h3>
        <p>User</p>
      </InfoWrapper>
    </UserAvatarWrapper>
  );
};
