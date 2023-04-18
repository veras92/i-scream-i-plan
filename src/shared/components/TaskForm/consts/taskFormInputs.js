import { nanoid } from '@reduxjs/toolkit';
import { PRIORITY_OPTIONS } from 'shared/services/priorityOptions';

export const titleInput = {
  inputName: 'title',
  type: 'text',
  id: nanoid(),
  label: 'Title',
  required: true,
  placeholder: 'Enter text',
};

export const timeInputs = [
  {
    inputName: 'start',
    type: 'time',
    id: nanoid(),
    label: 'Start',
    required: true,
    placeholder: '',
  },
  {
    inputName: 'end',
    type: 'time',
    id: nanoid(),
    label: 'End',
    required: true,
    placeholder: '',
  },
];

export const priorityInputs = [
  {
    inputName: 'priority',
    type: 'radio',
    id: nanoid(),
    label: 'Low',
    value: PRIORITY_OPTIONS.low,
    checked: true,
  },
  {
    inputName: 'priority',
    type: 'radio',
    id: nanoid(),
    label: 'Medium',
    value: PRIORITY_OPTIONS.medium,
    checked: false,
  },
  {
    inputName: 'priority',
    type: 'radio',
    id: nanoid(),
    label: 'High',
    value: PRIORITY_OPTIONS.high,
    checked: false,
  },
];
