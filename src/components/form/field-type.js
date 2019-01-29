import React from 'react';
import PropTypes from 'prop-types';
import FormFieldset from '../forms/fieldset';
import FormField from '../forms/form-field';

/**
 * If the field is a fieldset (group of fields) then wrap with the form fieldset
 * component and render the fields in the group
 *
 * @param {field.formik} param
 */
const FormFieldType = ({ formField }) => {
  if (formField.internal.type === 'ContentfulTopicFormFieldset') {
    return (
      <FormFieldset
        legend={formField.fieldsetLegend}
        description={formField.fieldsetDescription.fieldsetDescription}
      >
        {formField.formFields.map((formFieldsetField, key) => (
          <FormField key={key} field={formFieldsetField} />
        ))}
      </FormFieldset>
    );
  }

  return <FormField key={formField.id} field={formField} />;
};

FormFieldType.propTypes = {
  formField: PropTypes.object,
};

export default FormFieldType;
