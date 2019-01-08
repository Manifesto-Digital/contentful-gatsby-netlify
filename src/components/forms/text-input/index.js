import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import successIcon from './success.png';
import errorIcon from './error.png';

const getStyles = props => {
  if (!props.touched) {
    return css`
      border: 1px solid ${props.theme.palette.grey15};
      background-color: white;
    `;
  }

  if (props.error) {
    return css`
      border: 1px solid ${props.theme.palette.error};
      background: no-repeat 97% url(${errorIcon});
      background-color: ${props.theme.palette.errorLight};
    `;
  }

  return css`
    border 1px solid ${props.theme.palette.success};
    background: no-repeat 97% url(${successIcon});
    background-color: ${props.theme.palette.successLight};
  `;
};

const Input = styled.input`
  ${getStyles};
  display: block;
  background-size: 15px 15px;
  outline: none;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.padding};
  padding: ${props => props.theme.spacing.formElementVerticalPadding};
`;

/**
 * Renders
 *
 * @param {import('formik').FieldProps} props
 */
export default function TextInput(props) {
  const { field, form, ...rest } = props;

  return (
    <Input
      as={rest.type === 'textarea' ? 'textarea' : undefined}
      {...field}
      {...rest}
      error={form.errors[field.name]}
      touched={form.touched[field.name]}
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.oneOf(['textarea', 'text', 'url', 'email', 'number']),
  field: PropTypes.object,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
};
