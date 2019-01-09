import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import successIcon from './success.png';
import errorIcon from './error.png';

const getStyles = ({ touched, error, theme }) => {
  if (!touched) {
    return css`
      border: 1px solid ${theme.palette.grey15};
      background-color: white;
    `;
  }

  if (error) {
    return css`
      border: 1px solid ${theme.palette.error};
      background: no-repeat 97% url(${errorIcon});
      background-color: ${theme.palette.errorLight};
    `;
  }

  return css`
    border 1px solid ${theme.palette.success};
    background: no-repeat 97% url(${successIcon});
    background-color: ${theme.palette.successLight};
  `;
};

const Input = styled.input`
  ${getStyles};
  display: block;
  background-size: 15px 15px;
  outline: none;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.standard};
  padding: ${props => props.theme.spacing.small};
`;

/**
 * Renders
 *
 * @param {import('formik').FieldProps} props
 */
const TextInput = ({ field, form, ...rest }) => (
  <Input
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
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
};

export default TextInput;
