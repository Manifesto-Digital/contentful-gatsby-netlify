import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../error-message';
import { CheckboxLabel, Input } from './styles';

const CheckboxInput = ({
  id,
  name,
  required,
  value,
  label,
  handleChange,
  checked,
  onBlur,
  touched,
  errors,
  submitCount,
}) => (
  <div>
    <Input
      onBlur={onBlur}
      type="checkbox"
      name={name}
      required={required}
      value={value}
      id={id}
      onChange={handleChange}
      checked={checked}
    />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    <ErrorMessage
      touched={touched}
      errors={errors}
      submitCount={submitCount}
      name={name}
    />
  </div>
);

CheckboxInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  onBlur: PropTypes.func,
  checked: PropTypes.bool,
  touched: PropTypes.object,
  errors: PropTypes.object,
  submitCount: PropTypes.number,
};

export default CheckboxInput;
