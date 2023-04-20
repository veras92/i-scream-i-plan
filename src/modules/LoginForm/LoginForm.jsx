import { useEffect } from 'react';
import { useLoginUserMutation } from 'redux/auth/authApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginRormSchema } from './loginFormSchema';
import { getDefaultValues } from 'shared/utils/getDefaultValues';

import { FormFiled } from 'shared/components/FormFiled/FormField';
import { loginFormInputs } from './loginFormInputs';

import { AuthNavigate } from 'shared/components/AuthNavigate/AuthNavigate';
import { ROUTES } from 'shared/services/routes';

import sprite from 'shared/icons/sprite.svg';
import GooseRocket from 'shared/images/GooseImg/goose-login/goose-login.png';
import GooseRocketRetina from 'shared/images/GooseImg/goose-login/@2x/goose-login@2x.png';

import {
  Svg,
  Wrapper,
  FormContainer,
  Form,
  FormTitle,
  Button,
  GooseIMG,
} from './LoginForm.styled';
import { notify } from 'shared/utils/errorToast';

const defaultValues = getDefaultValues(loginFormInputs);

export const LoginForm = () => {
  const [login, { isError, error }] = useLoginUserMutation();

  useEffect(() => {
    if (isError) notify(error?.data?.message || 'Sorry, something went wrong');
  }, [error, isError]);

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
    login(data);
    reset();
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
          <FormTitle>Log In</FormTitle>
          {loginFormInputs.map(input => (
            <FormFiled
              key={input.id}
              {...input}
              register={reg}
              errors={errors}
            />
          ))}
          <Button type="submit">
            <span>Log in</span>
            <Svg width="20" height="20">
              <use href={`${sprite}#icon-Log-in`} />
            </Svg>
          </Button>
        </Form>
        <AuthNavigate route={ROUTES.register} content="Sign Up" />
        <GooseIMG
          srcset={`${GooseRocket} 1x, ${GooseRocketRetina} 2x`}
          src={`${GooseRocket}`}
          alt="goose"
        />
      </FormContainer>
    </Wrapper>
  );
};
