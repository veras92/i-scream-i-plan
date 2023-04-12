import { nanoid } from '@reduxjs/toolkit';

export const loginFormInputs = [
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    required: true,
    placeholder: 'Enter email',
  },
  {
    inputName: 'password',
    type: 'password',
    id: nanoid(),
    required: true,
    placeholder: 'Enter password',
  },
];
