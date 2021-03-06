import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorMessage from '../error-message';
import { Input, InputWrapper, Label } from './styles';

const RadioInput = ({
  name,
  required,
  value,
  label,
  id,
  checked,
  onBlur,
  touched,
  errors,
  submitCount,
  marginRight,
}) => (
  <InputWrapper marginRight={marginRight}>
    <Input
      as={Field}
      type="radio"
      name={name}
      required={required}
      value={value}
      id={id}
      checked={checked}
      onBlur={onBlur}
    />
    <Label htmlFor={id}>{label}</Label>
    <ErrorMessage
      touched={touched}
      errors={errors}
      submitCount={submitCount}
      name={name}
      marginTop
    />
  </InputWrapper>
);

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  submitCount: PropTypes.number,
  marginRight: PropTypes.bool,
};

export default RadioInput;
