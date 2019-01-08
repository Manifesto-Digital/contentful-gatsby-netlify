import React from 'react';
import { Form, Field, Formik } from 'formik';
import Button from '../button';
import * as FormProvider from '../forms/provider';
import TextInput from '../forms/text-input';

export default function FeedbackForm() {
  return (
    <FormProvider.Consumer>
      {({ submitForm }) => (
        <Formik
          initialValues={{ comment: '' }}
          onSubmit={values => {
            submitForm('feedback', values);
          }}
        >
          {() => (
            <Form>
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
