import React from 'react';
import { Input, Label, StyledDatePicker } from './DatePicker.styled';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export const DatePicker = ({
  control,
  inputName,
  label,
  id,
  placeholder,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>

      <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDatePicker
            id={id}
            placeholderText={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            dateFormat="dd/MM/yyyy"
            customInput={<Input />}
          />
        )}
      />
      <ErrorMessage errors={errors} name={inputName} />
    </div>
  );
};
