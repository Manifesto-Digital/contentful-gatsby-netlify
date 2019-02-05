import React from 'react';
import PropTypes from 'prop-types';
import FormFieldset from '../form-elements/fieldset';
import FormField from '../form-elements/form-field';

/**
 * If the field is a fieldset (group of fields) then wrap with the form fieldset
 * component and render the fields in the group
 *
 * @param {field.formik} param
 */
const FormFieldType = ({ formField }) => {
  if (formField.internal.type === 'ContentfulTopicFormFieldset') {
    const { fieldsetLegend, fieldsetDescription, formFields } = formField;
    return (
      <FormFieldset
        legend={fieldsetLegend}
        description={fieldsetDescription.fieldsetDescription}
      >
        {formFields &&
          formFields.map((formFieldsetField, key) => (
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
