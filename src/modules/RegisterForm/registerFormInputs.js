import { nanoid } from '@reduxjs/toolkit';

export const registerFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    required: true,
    placeholder: 'Enter your name',
  },
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
