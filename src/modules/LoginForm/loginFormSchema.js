import * as Yup from 'yup';

export const loginRormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});
