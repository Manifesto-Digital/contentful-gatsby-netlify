import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import RadioButtonInput from './radio-button-input';
import { LayoutWrapper } from './styles';
import { FieldWrapper } from '../form-field/styles';

const RadioField = ({ field, inline, onChange }) => {
  if (!field.valueOptions || field.valueOptions.length < 1) return null;

  const optionLength = field.valueOptions.length;
  const multipleOptions = optionLength > 1;

  return (
    <FieldWrapper as={multipleOptions && 'fieldset'}>
      <LayoutWrapper inline={inline}>
        {field.valueOptions.map((valueOption, i) => (
          <Field
            key={i}
            name={field.machineName}
            render={({ field: fieldValues, form }) => {
              const radioButtonValue = form.values[field.machineName];
              return (
                <RadioButtonInput
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
                  marginRight={inline}
                />
              );
            }}
          />
        ))}
      </LayoutWrapper>
    </FieldWrapper>
  );
};

RadioField.propTypes = {
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
  onChange: PropTypes.func,
  inline: PropTypes.bool,
};

export default RadioField;
