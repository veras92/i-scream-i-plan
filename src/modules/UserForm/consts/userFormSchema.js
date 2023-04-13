// import { parseDateString } from 'shared/validation/parseDate';
import { nameRegExp, phoneRegExp } from 'shared/validation/regExps';
import * as Yup from 'yup';

export const registerRormSchema = Yup.object().shape({
  avatar: Yup.string(),
  // тип файлу ???
  name: Yup.string()
    .required('This field is required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .max(16, 'Name may contain only 16 characters'),

  phone: Yup.string().matches(
    phoneRegExp,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
  birthday: Yup.date(),
  // .transform(parseDateString)
  // .max(new Date(), 'Future date not allowed'),
  skype: Yup.string().max(16, 'Skype may contain only 16 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
});
