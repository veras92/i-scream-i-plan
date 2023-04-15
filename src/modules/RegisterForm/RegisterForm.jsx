// "1. Компонент створює блок розмітки з формою та інпутами: name, email, password і кнопкою відправки форми.
// 2. Інпути повинні бути реалізовані як контрольовані компоненти за допомогою бібліотеки formik/hook form
// 3. По сабміту поля форми повинні проходити валідацію, (бібліотека yup) і в разі, негативного результату під відповітним інпутом підсвітити повідомлення помилки валідації.
// 4. В разі успішної відповіді інформацію про користувача потрібно записати в глобальний стейт і виконати редірект на приватний маршрут /calendar/month.
// 5. В разі помилки користувачу потрібно вивести відповідне пуш-повідомлення з помилкою"

import { useRegisterUserMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './registerFormSchema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

import { FormFiled } from 'shared/components/FormFiled/FormField';
import { registerFormInputs } from './registerFormInputs';

import sprite from 'shared/icons/sprite.svg';
import { Svg } from './RegisterForm.styled';
import { setCredentialsOnRegister } from 'redux/auth/authSlice';

const defaultValues = getDefaultValues(registerFormInputs);

export const RegisterForm = () => {
  const [register] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const {
    register: reg,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues,
  });

  const onSubmit = async data => {
    try {
      const response = await register(data).unwrap();
      dispatch(setCredentialsOnRegister(response));
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      {registerFormInputs.map(input => (
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
