import React from 'react';
import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';

// Components
import { Container } from '../styled/containers';
import { FormFieldWrapper } from '../forms/field-wrapper/styles';
import Button from '../button';
// Styles

const ContentForm = ({ submitUrl, sourceCode, submitCallToAction }) => {
  console.log('FORM');

  return (
    <Container>
      <Formik
        initialValues={{
          sourcecode: sourceCode,
        }}
      >
        <form action={submitUrl} method="GET">
          Form
          <Field type="hidden" name="sourcecode" />
          <FormFieldWrapper>
            <Button type="submit">{submitCallToAction}</Button>
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
};

export default ContentForm;
