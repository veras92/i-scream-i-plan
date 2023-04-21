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
  BtnsWrapItem,
  Button,
  Cancel,
  Form,
  RadioBtnsWrap,
  RadioBtnsWrapItem,
  Svg,
  TimePickerWrap,
} from './TaskForm.styled';
import { Loader } from '../Loader/Loader';

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
    <>
      {isCreating && <Loader />}
      {isChanging && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFiled register={register} errors={errors} {...titleInput} />
        <TimePickerWrap>
          {timeInputs.map(input => (
            <li key={input.id}>
              <FormFiled register={register} errors={errors} {...input} />
            </li>
          ))}
        </TimePickerWrap>
        <RadioBtnsWrap>
          {priorityInputs.map(input => (
            <RadioBtnsWrapItem key={input.id}>
              <RadioButton register={register} {...input} />
            </RadioBtnsWrapItem>
          ))}
        </RadioBtnsWrap>
        {isAdd ? (
          <BtnsWrap>
            <BtnsWrapItem>
              <Button type="submit" function="save" disabled={isCreating}>
                <Svg width="20" height="20">
                  <use href={`${sprite}#icon-plus`} />
                </Svg>
                <span>{type}</span>
              </Button>
            </BtnsWrapItem>
            <BtnsWrapItem>
              <Cancel type="button" onClick={onCloseModal}>
                Cancel
              </Cancel>
            </BtnsWrapItem>
          </BtnsWrap>
        ) : (
          <Button
            type="submit"
            function="edit"
            disabled={!isDirty || isChanging}
          >
            {type}
          </Button>
        )}
      </Form>
    </>
  );
};
