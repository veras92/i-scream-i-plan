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

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentialsOnUpdate } from 'redux/auth/authSlice';

import { useUpdateUserInfoMutation } from 'redux/auth/authApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from './consts/userFormSchema';
import { useAuth } from 'hooks/useAuth';
import { formatDate } from 'shared/utils/formatDate';
import { userAvatarInput, userFormInputs } from './consts/userFormInputs';

import { UserAvatarField } from './components/UserAvatarField/UserAvatarField';
import { FormFiled } from 'shared/components/FormFiled/FormField';
import { DatePicker } from './components/DatePicker/DatePicker';

export const UserForm = () => {
  const formRef = useRef(null);

  const { name, email, phone, birthday, skype, userImgUrl } = useAuth();
  const [update] = useUpdateUserInfoMutation();

  const dispatch = useDispatch();

  const {
    register: reg,
    control,
    handleSubmit,

    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(userFormSchema),
    defaultValues: {
      name,
      email,
      phone,
      birthday: birthday || new Date(),
      skype,
      userImgUrl,
    },
  });

  const onSubmit = async data => {
    const prepareBirthday = formatDate(data.birthday);
    const preparedData = {
      ...data,
      birthday: prepareBirthday,
    };

    try {
      const response = await update(preparedData).unwrap();
      dispatch(setCredentialsOnUpdate(response));
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      <UserAvatarField
        userName={name}
        control={control}
        errors={errors}
        {...userAvatarInput}
      />
      <div>
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
      </div>
      <button type="submit" disabled={!isDirty}>
        Save changes
      </button>
    </form>
  );
};

// "валідація форми:

// аватар: тип файл
// юзерНейм: макс. 16символів | обов'язково
// емейл: емейл | обов'язково
// день народження: дата - YYYY-MM-DD
// телефон: +380971234567
// скайп: макс. 16 символів"
