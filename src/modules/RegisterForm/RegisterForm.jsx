// "1. Компонент створює блок розмітки з формою та інпутами: name, email, password і кнопкою відправки форми.
// 2. Інпути повинні бути реалізовані як контрольовані компоненти за допомогою бібліотеки formik/hook form
// 3. По сабміту поля форми повинні проходити валідацію, (бібліотека yup) і в разі, негативного результату під відповітним інпутом підсвітити повідомлення помилки валідації.
// 4. В разі успішної відповіді інформацію про користувача потрібно записати в глобальний стейт і виконати редірект на приватний маршрут /calendar/month.
// 5. В разі помилки користувачу потрібно вивести відповідне пуш-повідомлення з помилкою"

import { useRegisterUserMutation } from 'redux/auth/authApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './registerFormSchema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

import { FormFiled } from 'shared/components/FormFiled/FormField';
import { registerFormInputs } from './registerFormInputs';

import { AuthNavigate } from 'shared/components/AuthNavigate/AuthNavigate';
import { ROUTES } from 'shared/services/routes';

import GooseRegister from 'shared/images/GooseImg/goose-register/goose-register.png';
import GooseRegisterRetina from 'shared/images/GooseImg/goose-register/@2x/goose-register@2x.png';

import sprite from 'shared/icons/sprite.svg';
import {
  Svg,
  Wrapper,
  FormContainer,
  Form,
  FormTitle,
  Button,
  GooseIMG,
} from './RegisterForm.styled';

const defaultValues = getDefaultValues(registerFormInputs);

export const RegisterForm = () => {
  const [register] = useRegisterUserMutation();

  const {
    register: reg,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues,
  });

  const onSubmit = data => {
    register(data);
    reset();
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
          <FormTitle>Sign Up</FormTitle>
          {registerFormInputs.map(input => (
            <FormFiled
              key={input.id}
              {...input}
              register={reg}
              errors={errors}
            />
          ))}
          <Button type="submit">
            <span>Sign up</span>
            <Svg width="20" height="20">
              <use href={`${sprite}#icon-Log-in`} />
            </Svg>
          </Button>
        </Form>
        <AuthNavigate route={ROUTES.login} content="Log In" />
        <GooseIMG
          srcset={`${GooseRegister} 1x, ${GooseRegisterRetina} 2x`}
          src={`${GooseRegister}`}
          alt="goose"
        />
      </FormContainer>
    </Wrapper>
  );
};
