import { useEffect } from 'react';
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
import { notify } from 'shared/utils/errorToast';

const defaultValues = getDefaultValues(registerFormInputs);

export const RegisterForm = () => {
  const [register, { isError, error }] = useRegisterUserMutation();

  useEffect(() => {
    if (isError) notify(error?.data?.message || 'Sorry, something went wrong');
  }, [error, isError]);

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
