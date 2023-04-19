// "1. Компонент отримує в пропсах початкові дані створюваного завдання та метод закриття модалки.
// 2. Компонент має локальний стейт для полів форми [title, start, end, priority]
// 3. Компонент рендерить блок розмітки з полями створюваної форми.
// 4. Якщо модалка відкрита для редагування завдання, кнопка сабміту повинна називатись Edit.
// 5. По сабміту відбувається запит на бекенд на створення або редагування завдання.
// 6. Успіх - завдання додається в відповідну колекці або змінюється в ній, закривається модалка, завдання відображається в таблиці.
// 7. Помилка - юзеру показується відповідне пушповідомлення
// 8. Клік по кнопці Cancel або кнопці закриття на формі закриває модалку."

import { useEffect } from 'react';

import {
  useChangeTaskMutation,
  useCreateTaskMutation,
} from 'redux/tasks/tasksApi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskFormSchema } from './consts/taskFormSchema';
import {
  priorityInputs,
  timeInputs,
  titleInput,
} from './consts/taskFormInputs';
import { FormFiled } from '../FormFiled/FormField';
import { RadioButton } from '../RadioButton/RadioButton';

import sprite from 'shared/icons/sprite.svg';
import { formatTimeOnInput, formatTimeOnOutput } from 'shared/utils/formatTime';
import { formatDate } from 'shared/utils/formatDate';
import { notify } from 'shared/utils/errorToast';

import { CATEGORIES_OPTIONS } from 'shared/services/categoriesOptions';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';
import {
  BtnsWrap,
  Cancel,
  Form,
  RadioBtnsWrap,
  Svg,
  TimePickerWrap,
} from './TaskForm.styled';

export const TaskForm = props => {
  const [
    createTask,
    {
      isLoading: isCreating,
      isError: isCreactTaskError,
      error: createTaskError,
    },
  ] = useCreateTaskMutation();
  const [
    changeTask,
    {
      isLoading: isChanging,
      isError: isChangeTaskError,
      error: changeTaskError,
    },
  ] = useChangeTaskMutation();

  useEffect(() => {
    if (isCreactTaskError)
      notify(createTaskError?.data?.message || 'Sorry, something went wrong');
    if (isChangeTaskError)
      notify(changeTaskError?.data?.message || 'Sorry, something went wrong');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeTaskError, isCreactTaskError]);

  const {
    id = '',
    title = '',
    start = '9-00',
    end = '14-00',
    priority = 'low',
    category = CATEGORIES_OPTIONS.toDo,
    type,
    date,
    onCloseModal,
  } = props;

  const isAdd = type === TASK_MODAL_TYPES.add;
  const isEdit = type === TASK_MODAL_TYPES.edit;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(taskFormSchema),
    defaultValues: {
      title,
      start: formatTimeOnInput(start),
      end: formatTimeOnInput(end),
      priority,
      category,
      date: formatDate(date),
    },
  });

  const onSubmit = async data => {
    const formData = {
      ...data,
      start: formatTimeOnOutput(data.start),
      end: formatTimeOnOutput(data.end),
      date: formatDate(data.date),
    };

    if (isAdd) {
      try {
        await createTask(formData).unwrap();
        reset();
        onCloseModal();
        return;
      } catch (err) {
        console.log(err);
      }
    }
    if (isEdit) {
      try {
        await changeTask({ id, task: formData }).unwrap();
        reset();
        onCloseModal();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormFiled register={register} errors={errors} {...titleInput} />
      <TimePickerWrap>
        {timeInputs.map(input => (
          <FormFiled
            key={input.id}
            register={register}
            errors={errors}
            {...input}
          />
        ))}
      </TimePickerWrap>
      <RadioBtnsWrap>
        {priorityInputs.map(input => (
          <RadioButton key={input.id} register={register} {...input} />
        ))}
      </RadioBtnsWrap>
      {isAdd ? (
        <BtnsWrap>
          <button type="submit" disabled={isCreating}>
            <Svg width="20" height="20">
              <use href={`${sprite}#icon-plus`} />
            </Svg>
            <span>{type}</span>
          </button>
          <Cancel type="button" onClick={onCloseModal}>
            Cancel
          </Cancel>
        </BtnsWrap>
      ) : (
        <button type="submit" disabled={!isDirty || isChanging}>
          {type}
        </button>
      )}
    </Form>
  );
};

// "валідація форми:

// title: макс 250 сиволів | обов'язково
// start: формат 09:00 | обов'язково
// end: формат 09:30 | end > time | обов'язково
// priority: [low | medium | high] | обов'язково
// category: [to-do | in-progress | done] | обов'язково"
// date: формат YYYY-MM-DD | обов'язково
