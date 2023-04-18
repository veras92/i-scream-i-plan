import { nanoid } from '@reduxjs/toolkit';
import { PRIORITY_OPTIONS } from 'shared/services/priorityOptions';

export const titleInput = {
  inputName: 'title',
  type: 'text',
  id: nanoid(),
  label: 'Title',
  placeholder: 'Enter text',
};

export const timeInputs = [
  {
    inputName: 'start',
    type: 'time',
    id: nanoid(),
    label: 'Start',
    placeholder: '',
  },
  {
    inputName: 'end',
    type: 'time',
    id: nanoid(),
    label: 'End',
    placeholder: '',
  },
];

const radioButtonsName = 'priority';

export const priorityInputs = [
  {
    inputName: radioButtonsName,
    type: 'radio',
    value: PRIORITY_OPTIONS.low,
    id: nanoid(),
    label: 'Low',
  },
  {
    inputName: radioButtonsName,
    type: 'radio',
    value: PRIORITY_OPTIONS.medium,
    id: nanoid(),
    label: 'Medium',
  },
  {
    inputName: radioButtonsName,
    type: 'radio',
    value: PRIORITY_OPTIONS.high,
    id: nanoid(),
    label: 'High',
  },
];
