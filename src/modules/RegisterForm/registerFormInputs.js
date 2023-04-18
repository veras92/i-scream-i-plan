import { nanoid } from '@reduxjs/toolkit';

export const registerFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'Name',
    placeholder: 'Enter your name',
  },
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
