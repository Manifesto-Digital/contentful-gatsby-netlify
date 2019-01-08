import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Button from '../button';
import * as FormProvider from '../forms/provider';
import TextInput from '../forms/text-input';

export default function FeedbackForm({ heading }) {
  const [submissionState, setSubmissionState] = useState({
    state: 'pending',
  });

  if (submissionState.state === 'success') {
    return (
      <>
        <h3>Thank you</h3>
        <p>Your feedback has been submitted to the team.</p>
      </>
    );
  }

  return (
    <FormProvider.Consumer>
      {({ submitForm }) => (
        <Formik
          initialValues={{ comment: '' }}
          validationSchema={Yup.object({ comment: Yup.string().required() })}
          onSubmit={async values => {
            await submitForm('feedback', values);
            setSubmissionState({ state: 'success' });
          }}
        >
          {() => (
            <Form>
              <h3>{heading}</h3>

              <Field
                name="comment"
                render={props => (
                  <TextInput
                    type="textarea"
                    placeholder="Your comment"
                    {...props}
                  />
                )}
              />

              <Button type="submit" fullWidth bg="red">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </FormProvider.Consumer>
  );
}

FeedbackForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
