import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './styles';

/**
 * Using a custom error handler due to https://github.com/jaredpalmer/formik/issues/691
 * in which touched is not set on custom components on a form submission, so we also
 * check the submit count to show errors.
 */
const ErrorMessage = ({ errors, touched, submitCount, name, marginTop }) => {
  const hasError = name in errors;
  const isTouched = name in touched;
  if (hasError && (isTouched || submitCount > 0)) {
    return (
      <StyledErrorMessage marginTop={marginTop}>
        {errors[name]}
      </StyledErrorMessage>
    );
  }

  return null;
};

ErrorMessage.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  submitCount: PropTypes.number,
  name: PropTypes.string,
  marginTop: PropTypes.bool,
};

export default ErrorMessage;
