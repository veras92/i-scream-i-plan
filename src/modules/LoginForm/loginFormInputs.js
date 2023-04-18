import { nanoid } from '@reduxjs/toolkit';

export const loginFormInputs = [
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    placeholder: 'Enter email',
  },
  {
    inputName: 'password',
    type: 'password',
    id: nanoid(),
    label: 'Password',
    placeholder: 'Enter password',
  },
];
