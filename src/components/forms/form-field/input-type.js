import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { isTextField, getTextInputType } from './helpers';
import { consistentString } from '../../../utils/content-formatting';
import AddressInput from '../address-input';
import CheckboxField from '../checkbox-field';
import RadioField from '../radio-field';
import SelectInput from '../select-input';
import TextInput from '../text-input';

const FieldInputField = ({ field }) => {
  if (!field.fieldType) return;
  const fieldType = consistentString(field.fieldType);

  // if (field.fieldType === 'Address') {
  //   return <AddressInput field={field} />;
  // }

  if (fieldType === 'checkboxes') {
    return <CheckboxField field={field} />;
  }

  if (fieldType === 'drop-down') {
    return <SelectInput field={field} />;
  }

  if (fieldType === 'radio-buttons') {
    return <RadioField field={field} />;
  }

  if (isTextField(fieldType)) {
    return (
      <Field
        name={field.machineName}
        render={props => {
          console.log(props);
          return (
            <TextInput
              type={getTextInputType(fieldType)}
              name={field.machineName}
              placeholder={field.placeholder}
              fullWidth
              {...props}
            />
          );
        }}
      />
    );
  }
  return null;
};

FieldInputField.propTypes = {
  field: PropTypes.object,
};

export default FieldInputField;
