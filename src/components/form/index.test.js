import React from 'react';
import ContentForm from '.';
import FormField from '../form-elements/form-field';
import { createFactory } from '../../utils/test-factories';
import {
  selectField,
  textField,
  singleCheckboxField,
  multipleCheckboxField,
  singleRadioField,
  multipleRadioField,
  emailTextField,
  numberTextField,
  numericTextField,
} from '../../utils/test-form-factories';
import { mountWithTheme } from '../../../__tests__/helpers';

export const createFormProps = createFactory({
  backgroundColour: 'Grey',
  formHeader: 'Wow, what a header and form',
  formId: 'formId123',
  sourceCode: '12345',
  submitCallToAction: 'Submit form CTA',
  thankYouMessage: {
    childContentfulRichText: {
      html: '<p>Woooo you are really awesome to fill out this form. </p>',
    },
  },
  submitUrl: 'http://www.test-endpoint.test',
  redirectAfterSubmission: [
    {
      slug: 'test-page',
    },
  ],
  formFields: [
    selectField(),
    textField({ required: true }),
    singleCheckboxField(),
    multipleCheckboxField(),
    singleRadioField(),
    multipleRadioField(),
    emailTextField(),
    numberTextField(),
    numericTextField(),
  ],
});

it('renders a form with a submit button', () => {
  const formProps = createFormProps();
  // TODO: Change to shallow when hooks works with shallow rendering
  const wrapper = mountWithTheme(<ContentForm data={formProps} />);
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
});

it('renders the amount of of formik form fields that are passed in props', () => {
  const formProps = createFormProps();
  // TODO: Change to shallow when hooks works with shallow rendering
  const wrapper = mountWithTheme(<ContentForm data={formProps} />);

  const formFieldsLength = formProps.formFields.length;
  expect(wrapper.find(FormField)).toHaveLength(formFieldsLength);
});

it('renders the form header', () => {
  const formProps = createFormProps({ formHeader: 'A form header' });
  const wrapper = mountWithTheme(<ContentForm data={formProps} />);
  expect(wrapper.find('h3').text()).toEqual(formProps.formHeader);
});

it('includes hidden fields for source code and formId', () => {
  const formProps = createFormProps({ formHeader: 'A form header' });
  const wrapper = mountWithTheme(<ContentForm data={formProps} />);
  expect(wrapper.find(`input[name="sourceCode"]`)).toHaveLength(1);
  expect(wrapper.find(`input[name="formId"]`)).toHaveLength(1);
});

// TODO: Test for form submit (formik) needs to shallow render to setProps on root component and hooks state change - react testing library?
