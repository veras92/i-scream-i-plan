// "1. Компонент сторінки підписанй на глобальний стейт state.auth.user.
// 2. Компонент рендерить форму з полями заповненми даними про юзера та має локальний стейт для цих данних.
// 3. За відсутності данних, в полях форми показуються плейсхолдери, а в полі з датою показується поточна дата.
// 4. При додаванні картинки в поле для вибору аватара, вона з'являється на місці плейсхолдера.
// 5. Кнопка сабміту не активна, поки в полях не зміняться значення.
// 6. Після зміни будь-якого значення кнопка стає активною.
// 7. Додати валідацію на поля форми.
// 8. По сабміту дані відправляються на бек і кнопка сабміту стає знову неактивною.
// 9. При успішній відповіді данні пишуться в глобальний стейт.
// 10. При помилці юзеру виводиться відповідне пушповідомлення."

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

// "валідація форми:

// аватар: тип файл
// юзерНейм: макс. 16символів | обов'язково
// емейл: емейл | обов'язково
// день народження: дата - YYYY-MM-DD
// телефон: +380971234567
// скайп: макс. 16 символів"
