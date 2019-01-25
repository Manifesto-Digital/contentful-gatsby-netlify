import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import FormFieldset from '../fieldset';

/**
 * @param {import('formik').FieldProps} props
 */
const AddressInput = ({ field }) => (
  <FormFieldset egend={field.name} description="">
    <Field
      name={`[${field.machineName}][line_one]`}
      required={field.required}
      placeholder="Street"
    />
    <Field name={`[${field.machineName}][line_one]`} placeholder="Street" />
    <Field
      name={`[${field.machineName}][town]`}
      required={field.required}
      placeholder="Town"
    />
    <Field
      name={`[${field.machineName}][post_code]`}
      required={field.required}
      placeholder="Post code"
    />
  </FormFieldset>
);

AddressInput.propTypes = {
  field: {
    defaultValue: PropTypes.string,
    fieldType: PropTypes.string,
    fieldLabel: PropTypes.string,
    machineName: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.string,
    toolTip: PropTypes.string,
    valueOptions: PropTypes.array,
  },
};

export default AddressInput;
