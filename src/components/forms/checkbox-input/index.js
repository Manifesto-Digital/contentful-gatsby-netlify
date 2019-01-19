import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import FormFieldset from '../fieldset';

/**
 * @param {import('formik').FieldProps} props
 */
const CheckboxInput = ({ field }) => {
  if (!Array.isArray(field.valueOptions)) {
    return null;
  }

  const CheckboxElement = ({ name, required, value, label }) => (
    <div>
      <Field type="checkbox" name={name} required={required} value={value} />
      <span>{label}</span>
    </div>
  );

  CheckboxElement.propTypes = {
    name: PropTypes.string,
    required: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  };

  if (field.valueOptions.length === 1) {
    return (
      <CheckboxElement
        name={field.valueOptions[0].machineName}
        required={field.valueOptions[0].required}
        value={field.valueOptions[0].value}
        label={field.valueOptions[0].label}
      />
    );
  }

  return (
    <FormFieldset legend="" description="">
      {field.valueOptions.map((valueOption, key) => (
        <CheckboxElement
          key={key}
          name={field.machineName}
          required={field.required}
          value={valueOption.value}
          label={valueOption.label}
        />
      ))}
    </FormFieldset>
  );
};

CheckboxInput.propTypes = {
  field: PropTypes.object,
};

export default CheckboxInput;
