import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import RadioButtonField from './radio-button-field';
import { FieldWrapper } from '../form-field/styles';

const RadioInput = ({ field }) => {
  if (!Array.isArray(field.valueOptions)) {
    return null;
  }
  const optionLength = field.valueOptions.length;
  const multipleOptions = optionLength > 1;

  return (
    <FieldWrapper as={multipleOptions && 'fieldset'}>
      {field.valueOptions.map((valueOption, i) => (
        <Field
          key={i}
          name={field.machineName}
          render={({ field: fieldValues, form }) => {
            const radioButtonValue = form.values[field.machineName];

            return (
              <RadioButtonField
                id={
                  multipleOptions
                    ? `${field.machineName}-${i + 1}`
                    : field.machineName
                }
                onBlur={fieldValues.onBlur}
                name={field.machineName}
                required={field.required}
                value={valueOption.value}
                label={valueOption.label}
                errors={form.errors}
                touched={form.touched}
                submitCount={form.submitCount}
                checked={valueOption.value === radioButtonValue}
              />
            );
          }}
        />
      ))}
    </FieldWrapper>
  );
};

RadioInput.propTypes = {
  field: PropTypes.shape({
    defaultValue: PropTypes.string,
    fieldType: PropTypes.string,
    fieldLabel: PropTypes.string,
    machineName: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    toolTip: PropTypes.string,
    valueOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default RadioInput;
