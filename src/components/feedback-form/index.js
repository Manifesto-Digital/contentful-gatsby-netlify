import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Recaptcha from '../form-elements/recaptcha';
import Button from '../button/index';
import { sendForm } from '../form/send';
import TextInput from '../form-elements/text-input';
import LinkButton from '../link-button';
import RadioInput from '../form-elements/radio-field/radio-button-input';
import { Flex } from './styles';
import RadioField from '../form-elements/radio-field';

const FeedbackForm = ({ heading }) => {
  const [submissionState, setSubmissionState] = useState('pending');
  if (submissionState === 'success') {
    return (
      <>
        <h3>Thank you</h3>
        <p>Your feedback has been submitted to the team.</p>
      </>
    );
  }

  if (submissionState === 'failed') {
    return (
      <>
        <h3>Sorry</h3>
        <p>There was a problem with submitting your feedback.</p>
        <LinkButton onClick={() => setSubmissionState('pending')}>
          Try again
        </LinkButton>
      </>
    );
  }

  const [helpfulness, setHelpfullnessState] = useState('');

  return (
    <Formik
      initialValues={{ comment: '', scale: '', reason: '', helpful: '' }}
      validationSchema={Yup.object({
        comment: Yup.string().required(),
        scale: Yup.number(),
        helpful: Yup.string(),
        reason: Yup.string(),
        recaptchaToken: Yup.string().required(),
      })}
      onSubmit={async values => {
        try {
          await sendForm('feedback', values);
          setSubmissionState('success');
        } catch (error) {
          setSubmissionState('failed');
        }
      }}
    >
      {({ setFieldValue, errors, touched, values }) => {
        // If values.helpfullness equals
        console.log('firing?', values);
        return (
          <Form>
            <h3>{heading}</h3>

            {/* Helpfulness Radio buttons */}
            <RadioField
              inline
              onChange={() => console.log('is this firing?')}
              field={{
                machineName: 'helpfulness',
                valueOptions: [
                  {
                    label: 'Yes',
                    value: 'yes',
                  },
                  {
                    label: 'No',
                    value: 'no',
                  },
                  {
                    label: 'Yes but',
                    value: 'but',
                  },
                ],
              }}
            />

            <Field
              name="comment"
              render={props => (
                <TextInput
                  autoFocus
                  type="textarea"
                  placeholder="Your comment"
                  fullWidth
                  {...props}
                />
              )}
            />

            <Recaptcha
              verifyCallback={token => {
                setFieldValue('recaptchaToken', token);
              }}
            />

            <Button type="submit" fullWidth bg="red">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

FeedbackForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default FeedbackForm;
