import PropTypes from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';

import { Label, Input } from './FormField.styled';
import { StyledErrorMessage } from 'shared/styles/components';

export const FormFiled = ({
  id,
  inputName,
  type,
  placeholder,
  label,
  register,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(inputName)}
      />
      <StyledErrorMessage>
        <ErrorMessage errors={errors} name={inputName} />
      </StyledErrorMessage>
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
  errors: PropTypes.any.isRequired,
};
