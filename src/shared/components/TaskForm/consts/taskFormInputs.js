import { nanoid } from '@reduxjs/toolkit';
import { PRIORITY_OPTIONS } from 'shared/services/priorityOptions';

const titleId = nanoid();
const startId = nanoid();
const endId = nanoid();
const lowId = nanoid();
const mediumId = nanoid();
const highId = nanoid();

export const titleInput = {
  inputName: 'title',
  type: 'text',
  id: titleId,
  label: 'Title',
  placeholder: 'Enter text',
};

export const timeInputs = [
  {
    inputName: 'start',
    type: 'time',
    id: startId,
    label: 'Start',
    placeholder: '',
  },
  {
    inputName: 'end',
    type: 'time',
    id: endId,
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
    id: lowId,
    label: 'Low',
  },
  {
    inputName: radioButtonsName,
    type: 'radio',
    value: PRIORITY_OPTIONS.medium,
    id: mediumId,
    label: 'Medium',
  },
  {
    inputName: radioButtonsName,
    type: 'radio',
    value: PRIORITY_OPTIONS.high,
    id: highId,
    label: 'High',
  },
];
