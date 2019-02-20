import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import RadioButtonInput from './radio-button-input';
import { LayoutWrapper } from './styles';
import { FieldWrapper } from '../form-field/styles';

const RatingField = ({ name, fieldLabel }) => (
  <>
    {fieldLabel && <label htmlFor={name}>{fieldLabel()}</label>}
    <FieldWrapper as="fieldset">
      <LayoutWrapper>
        {Array.from({ length: 11 }).map((valueOption, i) => (
          <Field
            key={i}
            name={name}
            render={({ field: fieldValues, form }) => {
              const radioButtonValue = form.values[name];
              return (
                <RadioButtonInput
                  id={`${name}-${i + 1}`}
                  onBlur={fieldValues.onBlur}
                  name={name}
                  value={i}
                  label={`${i}`}
                  errors={form.errors}
                  touched={form.touched}
                  submitCount={form.submitCount}
                  checked={`${i}` === radioButtonValue}
                />
              );
            }}
          />
        ))}
      </LayoutWrapper>
    </FieldWrapper>
  </>
);

RatingField.propTypes = {
  name: PropTypes.string.isRequired,
  fieldLabel: PropTypes.func,
};

export default RatingField;
