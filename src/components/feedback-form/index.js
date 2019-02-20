import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Recaptcha from '../form-elements/recaptcha';
import Button from '../button/index';
import { sendForm } from '../form/send';
import TextInput from '../form-elements/text-input';
import LinkButton from '../link-button';
import { StyledForm } from './styles';
import RadioField from '../form-elements/radio-field';
import RatingField from '../form-elements/rating-field';
import ReasonSelect from './reason-select';

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

  return (
    <Formik
      initialValues={{
        comment: '',
        netpromoterscore: '7',
        reason: 'selectReason',
        helpful: '',
      }}
      validationSchema={Yup.object({
        comment: Yup.string(),
        netpromoterscore: Yup.number(),
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
      {({ setFieldValue, errors, values }) => (
        <StyledForm>
          <h3>{heading}</h3>

          {/* Was this helpful ? radio buttons */}
          <RadioField
            inline
            field={{
              machineName: 'helpful',
              valueOptions: [
                {
                  label: 'Yes',
                  value: 'Yes',
                },
                {
                  label: 'No',
                  value: 'No',
                },
                {
                  label: 'Yes but',
                  value: 'YesBut',
                },
              ],
            }}
          />

          {/* Show other options once was this helpful question answered */}
          {values.helpful && (
            <>
              {/* Show reason and comment if page was not helpful */}
              {values.helpful !== 'Yes' && (
                <>
                  <ReasonSelect name="reason" initialValue="selectReason" />
                  <Field
                    name="comment"
                    render={props => (
                      <TextInput
                        type="textarea"
                        placeholder="Your comment"
                        fullWidth
                        {...props}
                      />
                    )}
                  />
                </>
              )}
              <RatingField
                fieldLabel={() => (
                  <>
                    Would you recommend Shelter Scotland's website to a friend,
                    colleague or family member? <br />
                    <small>
                      (0 - not at all likely, 10 - extremely likely)
                    </small>
                  </>
                )}
                name="netpromoterscore"
              />

              <Recaptcha
                verifyCallback={token => {
                  setFieldValue('recaptchaToken', token);
                }}
              />

              <Button type="submit" fullWidth bg="red">
                Submit
              </Button>
            </>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

FeedbackForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default FeedbackForm;
