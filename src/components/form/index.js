import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import { navigate } from '@reach/router';
import { getInitialValues, getValidationSchema } from './helpers';
// Components
import { Container } from '../styled/containers';
import Button from '../button';
import FormFieldType from './field-type';
import Recaptcha from '../forms/recaptcha';
import InlineCallout from '../inline-callout';
// Styles
import { FormWrapper, FormFieldWrapper, ThankYouMessage } from './styles';

const ContentForm = ({ data }) => {
  const {
    sourceCode,
    formFields,
    submitUrl,
    submitCallToAction,
    thankYouMessage,
    redirectAfterSubmission,
  } = data;
  const hiddenInitialValues = {
    sourceCode,
  };
  const [submitted, setSubmitted] = useState(false);
  const thankYouMessageRef = useRef(null);

  useEffect(() => {
    if (thankYouMessageRef && submitted) {
      window.scrollTo(0, thankYouMessageRef.current.offsetTop);
    }
  }, [submitted]); // Only re-run the effect if submitted changes

  return (
    <FormWrapper>
      <Container>
        <Formik
          initialValues={getInitialValues(formFields, hiddenInitialValues)}
          // validationSchema={getValidationSchema(formFields)}
          onSubmit={e => {
            console.log(`Will submit form to ${submitUrl} with values`, e);
            if (redirectAfterSubmission) {
              // TODO: When hierarchy is introduced generate this slug
              const linkSlug = redirectAfterSubmission[0].slug;
              return navigate(`/${linkSlug}`);
            }
            // On success?
            setSubmitted(true);
          }}
        >
          {({ setFieldValue }) => (
            <Form noValidate>
              <Field type="hidden" name="sourcecode" hidden />
              {formFields.map(formField => (
                <FormFieldType
                  key={formField.id}
                  setFieldValue={setFieldValue}
                  formField={formField}
                />
              ))}

              <Recaptcha />

              <FormFieldWrapper>
                <Button bg="red" type="submit" disabled={submitted}>
                  {submitCallToAction}
                </Button>
              </FormFieldWrapper>
            </Form>
          )}
        </Formik>
        {submitted && (
          <InlineCallout
            forwardedRef={thankYouMessageRef}
            borderCol="red"
            insideContainer
            content={{
              content: thankYouMessage,
              borderColour: 'red',
              bannerColour: 'grey',
            }}
          />
        )}
      </Container>
    </FormWrapper>
  );
};

ContentForm.propTypes = {
  data: PropTypes.shape({
    submitUrl: PropTypes.string,
    sourceCode: PropTypes.string,
    submitCallToAction: PropTypes.string,
    formFields: PropTypes.array,
  }),
};

export default ContentForm;
