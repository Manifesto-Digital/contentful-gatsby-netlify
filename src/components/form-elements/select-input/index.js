import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { FieldWrapper } from '../form-field/styles';

/**
 * @param {import('formik').FieldProps} props
 */
const SelectInput = ({ field, ...rest }) => {
  if (!field.valueOptions || field.valueOptions.length < 1) return null;

  const SelectOption = ({ label, value }) => (
    <option value={value} selected>
      {label}
    </option>
  );

  SelectOption.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
  };

  return (
    <FieldWrapper>
      <Field component="select" name={field.machineName}>
        {field.valueOptions.map((optionValue, i) => (
          <option
            value={optionValue.value}
            disabled={optionValue.disabled}
            key={i}
          >
            {optionValue.label}
          </option>
        ))}
      </Field>
    </FieldWrapper>
  );
};

SelectInput.propTypes = {
  field: PropTypes.shape({
    defaultValue: PropTypes.string,
    fieldType: PropTypes.string,
    fieldLabel: PropTypes.string,
    machineName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    toolTip: PropTypes.string,
    valueOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default SelectInput;
