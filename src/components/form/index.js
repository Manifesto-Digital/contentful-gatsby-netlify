import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, Formik, Form } from 'formik';
import { navigate } from '@reach/router';
import { consistentString } from '../../utils/content-formatting';
import {
  getInitialValues,
  getValidationSchema,
  sendAnalyticsSubmissionEvent,
} from './helpers';
// Components
import { Container } from '../styled/containers';
import Button from '../button';
import FormFieldType from './field-type';
import Recaptcha from '../form-elements/recaptcha';
import InlineCallout from '../inline-callout';
import RichText from '../rich-text';
// Styles
import { ModuleWrapper, FormWrapper, FormFieldWrapper } from './styles';

const ContentForm = ({ data, insideContainer }) => {
  const {
    sourceCode,
    formId,
    formFields,
    submitUrl,
    submitCallToAction,
    thankYouMessage,
    redirectAfterSubmission,
    backgroundColour,
    formHeader,
    administrativeTitle,
  } = data;

  const hiddenInitialValues = {
    sourceCode,
    formId,
  };
  const [submitted, setSubmitted] = useState(false);
  const thankYouMessageRef = useRef(null);

  useEffect(() => {
    if (thankYouMessageRef && submitted) {
      window.scrollTo(0, thankYouMessageRef.current.offsetTop);
    }
  }, [submitted]); // Only re-run the effect if submitted changes

  if (!formFields) return null;

  return (
    <ModuleWrapper>
      <Container padding={!insideContainer}>
        <Formik
          initialValues={getInitialValues(formFields, {
            ...hiddenInitialValues,
          })}
          validationSchema={getValidationSchema(formFields)}
          onSubmit={values => {
            console.log(`Will submit form to ${submitUrl} with values`, values);
            sendAnalyticsSubmissionEvent(
              values,
              formFields,
              hiddenInitialValues,
              { formName: administrativeTitle, formHeader }
            );

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
            <FormWrapper backgroundColour={consistentString(backgroundColour)}>
              <Form noValidate>
                {formHeader && <h3>{formHeader}</h3>}

                <Field type="hidden" name="sourceCode" hidden />
                <Field type="hidden" name="formId" hidden />
                {formFields.map((formField, i) => (
                  <FormFieldType
                    key={i}
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
            </FormWrapper>
          )}
        </Formik>
        {submitted && (
          <InlineCallout
            forwardedRef={thankYouMessageRef}
            borderColour="red"
            insideContainer
          >
            <RichText richText={thankYouMessage} />
          </InlineCallout>
        )}
      </Container>
    </ModuleWrapper>
  );
};

ContentForm.propTypes = {
  data: PropTypes.shape({
    submitUrl: PropTypes.string,
    sourceCode: PropTypes.string,
    formId: PropTypes.string,
    submitCallToAction: PropTypes.string,
    formFields: PropTypes.array,
    formHeader: PropTypes.string,
    backgroundColour: PropTypes.oneOf(['White', 'Grey']),
  }),
  insideContainer: PropTypes.bool,
};

export default ContentForm;
