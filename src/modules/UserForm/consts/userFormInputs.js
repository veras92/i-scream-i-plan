import { nanoid } from '@reduxjs/toolkit';

export const userFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'User Name',
    required: true,
    placeholder: 'Enter your name',
  },
  {
    inputName: 'phone',
    type: 'tel',
    id: nanoid(),
    label: 'Phone',
    required: false,
    placeholder: 'Enter phone',
  },
  {
    inputName: 'birthday',
    type: 'date',
    id: nanoid(),
    label: 'Birthday',
    required: false,
    placeholder: 'DD/MM/YYYY',
  },
  {
    inputName: 'skype',
    type: 'string',
    id: nanoid(),
    label: 'Skype',
    required: false,
    placeholder: 'Enter skype',
  },
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    required: true,
    placeholder: 'Enter email',
  },
];

export const userAvatarInput = {
  inputName: 'userImgUrl',
  type: 'file',
  id: nanoid(),
  label: '',
  required: false,
  placeholder: '',
};
