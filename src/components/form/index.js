import React from 'react';
import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';

// Components
import { Container } from '../styled/containers';
import { FormFieldWrapper } from '../forms/field-wrapper/styles';
import Button from '../button';
import FormField from '../forms/form-field';
import FormFieldset from '../forms/fieldset';

const ContentForm = ({
  submitUrl,
  sourceCode,
  submitCallToAction,
  formFields,
}) => {
  const initialValues = {
    sourcecode: sourceCode,
  };

  const ContentFormGetInitialValues = (fields, values) => {
    fields.forEach(field => {
      if (field.internal.type === 'ContentfulTopicFormField') {
        if (field.defaultValue) {
          values[`${field.machineName}`] = field.defaultValue;
        }
      }

      if (field.internal.type === 'ContentfulTopicFormFieldset') {
        ContentFormGetInitialValues(field.formFields, values);
      }
    });
  };

  const ContentFormFields = ({ formField }) => {
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

  ContentFormGetInitialValues(formFields, initialValues);

  ContentFormFields.propTypes = {
    formField: PropTypes.object,
  };

  return (
    <Container>
      <Formik initialValues={initialValues}>
        <form action={submitUrl} method="GET">
          {formFields.map(formField => (
            <ContentFormFields key={formField.id} formField={formField} />
          ))}
          <Field type="hidden" name="sourcecode" />
          <FormFieldWrapper>
            <Button bg="red" type="submit">
              {submitCallToAction}
            </Button>
          </FormFieldWrapper>
        </form>
      </Formik>
    </Container>
  );
};

ContentForm.propTypes = {
  submitUrl: PropTypes.string,
  sourceCode: PropTypes.string,
  submitCallToAction: PropTypes.string,
  formFields: PropTypes.array,
};

export default ContentForm;
