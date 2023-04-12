import { nanoid } from '@reduxjs/toolkit';

// { "name": "One", "email": "1@gmail.com", "phone": 38094383377, "birthday": null, "skype": "One1", "userImgUrl": "image.jpg" }

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
    placeholder: 'DD/MM/YYY',
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
