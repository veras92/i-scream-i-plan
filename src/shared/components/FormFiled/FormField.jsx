import { capitalize } from 'shared/utils/capitalize';
import PropTypes from 'prop-types';
// import { ErrorMessage } from '@hookform/error-message';

export const FormFiled = ({
  id,
  inputName,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={id}>{capitalize(inputName)}</label>
      <input id={id} type={type} {...register(inputName, { required })} />
      {/* <ErrorMessage errors={errors} name={inputName} /> */}
    </div>
  );
};

FormFiled.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  errors: PropTypes.any.isRequired,
};
