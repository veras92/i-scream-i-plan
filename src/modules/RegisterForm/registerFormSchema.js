import { nameRegExp, passwordRegExp } from 'shared/validation/regExps';
import * as Yup from 'yup';

export const registerRormSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .max(16, 'Name may contain only 16 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .matches(
      passwordRegExp,
      'Password must contain minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit'
    ),
});
