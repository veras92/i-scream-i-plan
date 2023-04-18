import PropTypes from 'prop-types';
import { Label, Input } from './RadioButton.styled';

export const RadioButton = ({
  inputName,
  type,
  id,
  label,
  value,
  checked,
  register,
}) => {
  return (
    <div>
      <Input
        id={id}
        type={type}
        value={value}
        checked={checked}
        {...register(inputName)}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

RadioButton.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
