import PropTypes from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';

import { Label, Input } from './FormField.styled';

export const FormFiled = ({
  id,
  inputName,
  type,
  placeholder,
  label,
  register,
  required,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {type !== 'date' ? (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(inputName, { required })}
        />
      ) : (
        <div>Place for date picker</div>
        // https://codesandbox.io/s/react-hook-form-controller-079xx
        // https://stackoverflow.com/questions/55794770/how-can-i-style-react-datepicker
        // https://github.com/Hacker0x01/react-datepicker
      )}
      <ErrorMessage errors={errors} name={inputName} />
    </div>
  );
};

FormFiled.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  errors: PropTypes.any.isRequired,
};
