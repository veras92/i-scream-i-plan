// "1. Компонент отримує в пропсах початкові дані створюваного завдання та метод закриття модалки.
// 2. Компонент має локальний стейт для полів форми [title, start, end, priority]
// 3. Компонент рендерить блок розмітки з полями створюваної форми.
// 4. Якщо модалка відкрита для редагування завдання, кнопка сабміту повинна називатись Edit.
// 5. По сабміту відбувається запит на бекенд на створення або редагування завдання.
// 6. Успіх - завдання додається в відповідну колекці або змінюється в ній, закривається модалка, завдання відображається в таблиці.
// 7. Помилка - юзеру показується відповідне пушповідомлення
// 8. Клік по кнопці Cancel або кнопці закриття на формі закриває модалку."

// import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormFiled } from '../FormFiled/FormField';
import {
  priorityInputs,
  timeInputs,
  titleInput,
} from './consts/taskFormInputs';
import {
  BtnsWrap,
  Cancel,
  Form,
  RadioBtnsWrap,
  Svg,
  TimePickerWrap,
} from './TaskForm.styled';
import { RadioButton } from '../RadioButton/RadioButton';

import sprite from 'shared/icons/sprite.svg';
import { Button } from 'shared/styles/components';
import {
  useChangeTaskMutation,
  useCreateTaskMutation,
} from 'redux/tasks/tasksApi';
import { formatTimeOnInput, formatTimeOnOutput } from 'shared/utils/formatTime';
import { formatDate } from 'shared/utils/formatDate';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskFormSchema } from './consts/taskFormSchema';
import { CATEGORIES_OPTIONS } from 'shared/services/categoriesOptions';
import { TASK_MODAL_TYPES } from 'shared/services/taskModalTypes';

export const TaskForm = ({
  id = '',
  title = '',
  start = '9-00',
  end = '14-00',
  priority = 'low',
  category = CATEGORIES_OPTIONS.toDo,
  type,
  date,
  onCloseModal,
}) => {
  const [createTask, { isLoading: isCreating }] = useCreateTaskMutation();
  const [changeTask, { isLoading: isChanging }] = useChangeTaskMutation();

  const isAdd = type === TASK_MODAL_TYPES.add;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
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
    try {
      if (isAdd) await createTask(formData).unwrap();
      await changeTask(id, formData).unwrap();
      reset();
      onCloseModal();
    } catch (err) {
      console.log(err);
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
          <Button
            type="submit"
            function="add"
            disabled={!isValid || isCreating}
          >
            <Svg width="20" height="20">
              <use href={`${sprite}#icon-plus`} />
            </Svg>
            <span>{type}</span>
          </Button>
          <Cancel type="button"> Cancel</Cancel>
        </BtnsWrap>
      ) : (
        <Button type="submit" function="save" disabled={!isValid || isChanging}>
          {type}
        </Button>
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
