import { parse } from 'date-fns';
import { CATEGORIES_OPTIONS } from 'shared/services/categoriesOptions';
import { PRIORITY_OPTIONS } from 'shared/services/priorityOptions';
import * as Yup from 'yup';

export const taskFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('This field is required')
    .max(250, 'The title is too long'),
  start: Yup.string().required('This field is required'),

  end: Yup.string()
    .required('This field is required')
    .test('start_end_test', 'End time must be after start time', function () {
      const { start, end } = this.parent;
      const arrStart = start.split(':');
      const arrEnd = end.split(':');
      const isValid =
        parseInt(arrStart[0] * 3600 + arrStart[1] * 60) <
        parseInt(arrEnd[0] * 3600 + arrEnd[1] * 60);

      return isValid;
    }),
  priority: Yup.mixed()
    .required('This field is required')
    .oneOf([
      PRIORITY_OPTIONS.low,
      PRIORITY_OPTIONS.medium,
      PRIORITY_OPTIONS.high,
    ]),
  category: Yup.mixed()
    .required('This field is required')
    .oneOf([
      CATEGORIES_OPTIONS.toDo,
      CATEGORIES_OPTIONS.inProgress,
      CATEGORIES_OPTIONS.done,
    ]),
  date: Yup.date()
    .transform((_, originalValue) =>
      parse(originalValue, 'yyyy-MM-dd', new Date())
    )
    .required('This field is required'),
});
