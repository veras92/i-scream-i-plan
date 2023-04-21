import { useEffect, useState } from 'react';

import { useAuth } from 'hooks/useAuth';
import { useUpdateUserInfoMutation } from 'redux/auth/authApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from './consts/userFormSchema';
import { formatDate } from 'shared/utils/formatDate';
import { userAvatarInput, userFormInputs } from './consts/userFormInputs';
import { parse } from 'date-fns';

import { UserAvatarField } from './components/UserAvatarField/UserAvatarField';
import { FormFiled } from 'shared/components/FormFiled/FormField';
import { DatePicker } from './components/DatePicker/DatePicker';
import { Button } from 'shared/styles/components';

import { Form, FormBody } from './UserForm.styled';
import { notify } from 'shared/utils/errorToast';
import { useNavigate } from 'react-router';

const today = new Date();

export const UserForm = () => {
  const { name, email, phone, skype, birthday, userImgUrl } = useAuth();
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(userImgUrl);
  const [update, { isError, error, isSuccess }] = useUpdateUserInfoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError && error?.status !== 413)
      notify(error?.data?.message || 'Sorry, something went wrong');
    if (isError && error.status === 413) notify('The image is too large');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (isSuccess) navigate(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const {
    register: reg,
    control,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(userFormSchema),
    defaultValues: {
      name,
      email,
      phone: !phone ? '' : phone,
      birthday: !birthday ? today : parse(birthday, 'yyyy-MM-dd', today),
      skype: !skype ? '' : skype,
      userImgUrl: !userImgUrl ? '' : userImgUrl,
    },
  });

  const onSubmit = async data => {
    const preparedBirthday =
      formatDate(data.birthday) === formatDate(today)
        ? null
        : formatDate(data.birthday);
    const preparedUserImgUrl = data.userImgUrl === '' ? null : currentAvatarUrl;
    const preparedPhone = data.phone === '' ? null : Number(data.phone);
    const preparedSkype = data.skype === '' ? null : data.skype;
    const preparedData = {
      ...data,
      phone: preparedPhone,
      skype: preparedSkype,
      birthday: preparedBirthday,
      userImgUrl: preparedUserImgUrl,
    };
    update(preparedData);
    setIsDisabled(true);
  };

  useEffect(() => {
    const checkIsDirty = () => {
      if (currentAvatarUrl === userImgUrl) {
        if (isDirty) setIsDisabled(false);
        if (!isDirty) setIsDisabled(true);
        if (isError && error?.status !== 413) setIsDisabled(true);
      }
    };

    checkIsDirty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDirty, dirtyFields]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      <UserAvatarField
        userName={name}
        errors={errors}
        register={reg}
        currentAvatarUrl={currentAvatarUrl}
        setCurrentAvatarUrl={setCurrentAvatarUrl}
        setIsDisabled={setIsDisabled}
        {...userAvatarInput}
      />
      <FormBody>
        {userFormInputs.map(input =>
          input.type !== 'date' ? (
            <FormFiled
              key={input.id}
              {...input}
              register={reg}
              errors={errors}
            />
          ) : (
            <DatePicker
              key={input.id}
              {...input}
              control={control}
              errors={errors}
            />
          )
        )}
      </FormBody>
      <Button type="submit" function="save" disabled={isDisabled}>
        Save changes
      </Button>
    </Form>
  );
};
