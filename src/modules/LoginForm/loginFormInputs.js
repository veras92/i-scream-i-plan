import { nanoid } from '@reduxjs/toolkit';

export const loginFormInputs = [
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    required: true,
    placeholder: 'Enter email',
  },
  {
    inputName: 'password',
    type: 'password',
    id: nanoid(),
    label: 'Password',
    required: true,
    placeholder: 'Enter password',
  },
];
