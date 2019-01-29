import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../error-message';
import { StyledInput, InputWrapper } from './styles';

const TextInput = ({ field, form, placeholder, ...rest }) => (
  <InputWrapper>
    <StyledInput
      as={rest.type === 'textarea' ? 'textarea' : undefined}
      {...field}
      {...rest}
      name={field.name}
      placeholder={placeholder || null}
      error={form.errors[field.name]}
      touched={form.touched[field.name]}
    />
    <ErrorMessage
      touched={form.touched}
      errors={form.errors}
      submitCount={form.submitCount}
      name={field.name}
    />
  </InputWrapper>
);

TextInput.propTypes = {
  type: PropTypes.oneOf([
    'textarea',
    'text',
    'url',
    'email',
    'number',
    'tel',
    'search',
  ]),
  field: PropTypes.object,
  inline: PropTypes.bool,
  noMargin: PropTypes.bool,
  fullWidth: PropTypes.bool,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }).isRequired,
};

export default TextInput;
