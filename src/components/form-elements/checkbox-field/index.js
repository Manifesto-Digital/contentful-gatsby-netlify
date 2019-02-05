import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
// Components
import CheckboxInput from './checkbox-input';
// Styles
import { FieldWrapper } from '../form-field/styles';

const CheckboxField = ({ field }) => {
  if (!Array.isArray(field.valueOptions)) {
    return null;
  }

  const optionLength = field.valueOptions.length;
  const multiple = optionLength > 1;

  const handleChange = (e, setFieldValue, currentValue) => {
    const { target } = e;

    // The value passed to the form is an array of values
    if (multiple) {
      const valueArray = currentValue || [];

      if (target.checked) {
        valueArray.push(target.value);
      } else {
        valueArray.splice(valueArray.indexOf(target.value), 1);
      }

      return setFieldValue(field.machineName, valueArray);
    }

    // The value passed to the form is a single value
    if (target.checked) {
      setFieldValue(field.machineName, target.value);
    } else {
      setFieldValue(field.machineName, '');
    }
  };

  if (multiple) {
    return (
      <FieldWrapper as="fieldset">
        {field.valueOptions.map((valueOption, i) => (
          <Field
            key={i}
            name={field.machineName}
            render={({ field: fieldValues, form }) => {
              const checkboxValue = form.values[field.machineName];

              return (
                <CheckboxInput
                  id={`${field.machineName}-${i + 1}`}
                  onBlur={fieldValues.onBlur}
                  name={field.machineName}
                  required={field.required}
                  value={valueOption.value}
                  label={valueOption.label}
                  checked={checkboxValue.includes(valueOption.value)}
                  errors={form.errors}
                  touched={form.touched}
                  submitCount={form.submitCount}
                  handleChange={e =>
                    handleChange(e, form.setFieldValue, checkboxValue)
                  }
                />
              );
            }}
          />
        ))}
      </FieldWrapper>
    );
  }
  if (optionLength === 1) {
    const valueOption = field.valueOptions[0];
    return (
      <FieldWrapper>
        <Field
          name={field.machineName}
          render={({ field: fieldValues, form }) => {
            const checkboxValue = form.values[field.machineName];
            return (
              <CheckboxInput
                id={field.machineName}
                onBlur={fieldValues.onBlur}
                name={field.machineName}
                required={field.required}
                value={valueOption.value}
                label={valueOption.label}
                checked={checkboxValue === valueOption.value}
                errors={form.errors}
                touched={form.touched}
                submitCount={form.submitCount}
                handleChange={e =>
                  handleChange(e, form.setFieldValue, checkboxValue)
                }
              />
            );
          }}
        />
      </FieldWrapper>
    );
  }

  return null;
};

CheckboxField.propTypes = {
  field: PropTypes.shape({
    defaultValue: PropTypes.string,
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

export default CheckboxField;
