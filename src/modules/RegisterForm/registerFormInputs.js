import { nanoid } from '@reduxjs/toolkit';

export const registerFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    required: true,
  },
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    required: true,
  },
  {
    inputName: 'password',
    type: 'password',
    id: nanoid(),
    required: true,
  },
];
