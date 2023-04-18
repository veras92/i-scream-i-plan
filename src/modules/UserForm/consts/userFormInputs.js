import { nanoid } from '@reduxjs/toolkit';

export const userFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'User Name',
    placeholder: 'Enter your name',
  },
  {
    inputName: 'phone',
    type: 'tel',
    id: nanoid(),
    label: 'Phone',
    placeholder: 'Enter phone',
  },
  {
    inputName: 'birthday',
    type: 'date',
    id: nanoid(),
    label: 'Birthday',
    placeholder: 'DD/MM/YYYY',
  },
  {
    inputName: 'skype',
    type: 'string',
    id: nanoid(),
    label: 'Skype',
    placeholder: 'Enter skype',
  },
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    placeholder: 'Enter email',
  },
];

export const userAvatarInput = {
  inputName: 'userImgUrl',
  type: 'file',
  id: nanoid(),
  label: '',
  placeholder: '',
};
