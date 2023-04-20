import React from 'react';
import { Input, Label, StyledDatePicker } from './DatePicker.styled';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { StyledErrorMessage } from 'shared/styles/components';
import locale from 'date-fns/locale/en-AU';

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
            closeOnScroll={e => e.target === document}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            customInput={<Input />}
            locale={locale}
          />
        )}
      />
      <StyledErrorMessage>
        <ErrorMessage errors={errors} name={inputName} />
      </StyledErrorMessage>
    </div>
  );
};
