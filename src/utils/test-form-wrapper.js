import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

export const FormikWrapper = ({ initialValues, validation, render }) => {
  //   console.log('initialValues', initialValues);
  //   console.log('validation', validation);
  return (
    <Formik initialValues={initialValues} validationSchema={validation}>
      {({ setFieldValue }) => render({ setFieldValue })}
    </Formik>
  );
};

FormikWrapper.propTypes = {
  initialValues: PropTypes.object,
  validation: PropTypes.object,
  render: PropTypes.func,
};
