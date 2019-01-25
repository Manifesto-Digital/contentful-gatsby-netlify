import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import FormFieldset from '../fieldset';

/**
 * @param {import('formik').FieldProps} props
 */
const RadioInput = ({ field }) => {
  if (!Array.isArray(field.valueOptions)) {
    return null;
  }

  const RadioElement = ({ name, required, value, label }) => (
    <div>
      <Field type="radio" name={name} required={required} value={value} />
      <span>{label}</span>
    </div>
  );

  RadioElement.propTypes = {
    name: PropTypes.string,
    required: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  };

  if (field.valueOptions.length === 1) {
    return (
      <RadioElement
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
        <RadioElement
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

RadioInput.propTypes = {
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

export default RadioInput;
