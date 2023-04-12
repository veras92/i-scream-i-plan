// "1. Компонент створює блок розмітки з формою та інпутами: email, password і кнопкою відправки форми.
// 2. Інпути повинні бути реалізовані як контрольовані компоненти за допомогою бібліотеки formik/hook-form
// 3. По сабміту поля форми повинні проходити валідацію, (бібліотека yup) і в разі, негативного результату під відповітним інпутом підсвітити повідомлення помилки валідації.
// 4. В разі успішної відповіді інформацію про користувача потрібно записати в глобальний стейт і виконати редірект на приватний маршрут /calendar/month.
// 5. В разі помилки користувачу потрібно вивести відповідне пуш-повідомлення з помилкою"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginRormSchema } from './loginFormSchema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

import { FormFiled } from 'shared/components/FormFiled/FormField';
import { loginFormInputs } from './loginFormInputs';

import sprite from 'shared/icons/sprite.svg';
import { Svg } from './LoginForm.styled';

const defaultValues = getDefaultValues(loginFormInputs);

export const LoginForm = () => {
  const {
    register: reg,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginRormSchema),
    defaultValues,
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      {loginFormInputs.map(input => (
        <FormFiled key={input.id} {...input} register={reg} errors={errors} />
      ))}
      <button type="submit">
        <span>Sign up</span>
        <Svg width="20" height="20">
          <use href={`${sprite}#icon-Log-in`} />
        </Svg>
      </button>
    </form>
  );
};
