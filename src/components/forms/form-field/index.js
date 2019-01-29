import React from 'react';
import PropTypes from 'prop-types';
import InputType from './input-type';
import Tooltip from './tooltip';
import { Label } from '../../styled/label';

/**
 * @param {import('formik').FieldProps} props
 */
const FormField = ({ field }) => {
  console.log('');

  return (
    <>
      <Label htmlFor={field.machineName}>{field.fieldLabel}</Label>
      <InputType field={field} />
      <Tooltip field={field} />
    </>
  );
};

FormField.propTypes = {
  field: PropTypes.object,
};

export default FormField;
