import { nanoid } from '@reduxjs/toolkit';

export const registerFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'Name',
    required: true,
    placeholder: 'Enter your name',
  },
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
