import { parseDateString } from 'shared/validation/parseDate';
import { nameRegExp, phoneRegExp } from 'shared/validation/regExps';
import * as Yup from 'yup';

export const userFormSchema = Yup.object().shape({
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
  birthday: Yup.date('Invalid date format')
    .transform(parseDateString)
    .max(new Date(), 'Future date not allowed'),
  skype: Yup.string().max(16, 'Skype may contain only 16 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  userImgUrl: Yup.mixed(),
  // .test(
  //   'filetype',
  //   'Please provide a supported file type: "jpeg", "jpg", "png"',
  //   (value, context) => {
  //     console.dir(value);
  //     const isValid = ['image/jpeg', 'image/png', 'image/jpg'].includes(value);
  //     if (!isValid) context.createError();
  //     return isValid;
  //   }
  // ),
});
