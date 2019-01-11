import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

/**
 * Renders
 *
 * @param {import('formik').FieldProps} props
 */
const TextInput = ({ field, form, ...rest }) => (
  <StyledInput
    as={rest.type === 'textarea' ? 'textarea' : undefined}
    {...field}
    {...rest}
    error={form.errors[field.name]}
    touched={form.touched[field.name]}
  />
);

TextInput.propTypes = {
  type: PropTypes.oneOf(['textarea', 'text', 'url', 'email', 'number', 'tel']),
  field: PropTypes.object,
  inline: PropTypes.bool,
  noMargin: PropTypes.bool,
  fullWidth: PropTypes.bool,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
};

export default TextInput;
