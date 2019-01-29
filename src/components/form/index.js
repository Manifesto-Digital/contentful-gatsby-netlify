import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import { getInitialValues, getValidationSchema } from './helpers';
// Components
import { Container } from '../styled/containers';
import Button from '../button';
import FormFieldType from './field-type';
import Recaptcha from '../forms/recaptcha';
// Styles
import { FormWrapper, FormFieldWrapper } from './styles';

const ContentForm = ({
  submitUrl,
  sourceCode,
  submitCallToAction,
  formFields,
}) => {
  const hiddenInitialValues = { sourceCode };

  return (
    <FormWrapper>
      <Container>
        <Formik
          initialValues={getInitialValues(formFields, hiddenInitialValues)}
          validationSchema={getValidationSchema(formFields)}
          onSubmit={e => {
            console.log(`Will submit form to ${submitUrl} with values`, e);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form noValidate>
              <Field type="hidden" name="sourcecode" hidden />
              {formFields
                .filter(field => field.fieldType !== 'Address')
                .map(formField => (
                  <FormFieldType
                    key={formField.id}
                    setFieldValue={setFieldValue}
                    formField={formField}
                  />
                ))}

              <Recaptcha />

              <FormFieldWrapper>
                <Button bg="red" type="submit">
                  {submitCallToAction}
                </Button>
              </FormFieldWrapper>
            </Form>
          )}
        </Formik>
      </Container>
    </FormWrapper>
  );
};

ContentForm.propTypes = {
  submitUrl: PropTypes.string,
  sourceCode: PropTypes.string,
  submitCallToAction: PropTypes.string,
  formFields: PropTypes.array,
};

export default ContentForm;
