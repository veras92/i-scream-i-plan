import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Controller } from 'react-hook-form';
import { setFileUrl } from 'shared/utils/setFileUrl';

import sprite from 'shared/icons/sprite.svg';
import { HiddenInput, Label, Svg } from './UserAvatarField.styled';
import { ErrorMessage } from '@hookform/error-message';

export const UserAvatarField = ({
  userName,
  control,
  errors,
  inputName,
  type,
  id,
}) => {
  const { userImgUrl } = useAuth();
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(userImgUrl);

  // console.log(currentAvatarUrl);

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
      <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, ...rest } }) => (
          <HiddenInput
            id={id}
            type={type}
            accept="image/*,.png,.jpg"
            {...rest}
            onChange={e => {
              setFileUrl(e.target.files[0], setCurrentAvatarUrl);
              return onChange(e);
            }}
          />
        )}
      />
      <ErrorMessage errors={errors} name="userImgUrl" />
      <h3>{userName}</h3>
      <p>User</p>
    </div>
  );
};
