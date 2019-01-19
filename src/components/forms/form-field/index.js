import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';
import AddressInput from '../address-input';
import CheckboxInput from '../checkbox-input';
import RadioInput from '../radio-input';
import SelectInput from '../select-input';
// import TextInput from '../text-input';

/**
 * @param {import('formik').FieldProps} props
 */
const FormField = ({ field }) => {
  const FieldInputField = () => {
    if (field.fieldType === 'Address') {
      return <AddressInput field={field} />;
    }

    if (field.fieldType === 'Checkboxes') {
      return <CheckboxInput field={field} />;
    }

    if (field.fieldType === 'Drop down') {
      return (
        <Field
          name={field.machineName}
          render={() => <SelectInput field={field} />}
        />
      );
    }

    if (field.fieldType === 'Radio Buttons') {
      return <RadioInput field={field} />;
    }

    if (field.fieldType === 'Text field') {
      return (
        <Field
          name={field.machineName}
          type="text"
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    }

    if (field.fieldType === 'Email') {
      return (
        <Field
          name={field.machineName}
          type="email"
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    }

    if (field.fieldType === 'Phone number') {
      return (
        <Field
          name={field.machineName}
          type="tel"
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    }

    if (field.fieldType === 'Numeric') {
      return (
        <Field
          name={field.machineName}
          type="number"
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    }

    return null;
  };

  const FieldLabel = () => <div>{field.fieldLabel}</div>;

  const FieldToolTip = () => {
    if (typeof field.toolTip !== 'undefined' && field.toolTip) {
      return <div>{field.toolTip}</div>;
    }

    return null;
  };

  return (
    <>
      <FieldLabel />
      <FieldInputField />
      <FieldToolTip />
    </>
  );
};

FormField.propTypes = {
  field: PropTypes.object,
};

export default FormField;
