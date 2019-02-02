import { getInitialValues, sendAnalyticsSubmissionEvent } from './helpers';
import { createFactory } from '../../utils/test-factories';
import {
  singleCheckboxField,
  multipleCheckboxField,
  multipleRadioField,
} from '../../utils/test-form-factories';

const formHelperProps = createFactory({
  sourceCode: '12345',
  formId: 'formId',
  formFields: [
    singleCheckboxField(),
    multipleCheckboxField(),
    multipleRadioField(),
  ],
});

it('generates the initial values object from form fields', () => {
  const { formFields } = formHelperProps();
  const hiddenInitialValues = {
    sourceCode: 'sourceCode-example',
  };
  const initialValues = getInitialValues(formFields, hiddenInitialValues);

  formFields.forEach((field, i) => {
    expect(initialValues[field.machineName]).toContain(
      field.defaultValue || ''
    );
  });
});

it('sends an analytics objects to datalayer', () => {
  const { formFields } = formHelperProps({
    formFields: [
      singleCheckboxField({
        valueOptions: [
          {
            value: 'smsOptIn',
            label: 'A single checkbox sms optIn option',
            sendToAnalytics: true,
          },
        ],
      }),
      multipleCheckboxField({
        valueOptions: [
          {
            value: 'one',
            label: 'Checkbox label',
            sendToAnalytics: false,
          },
          {
            value: 'phoneOptIn',
            label: 'Phone optIn',
            sendToAnalytics: true,
          },
        ],
      }),
      multipleRadioField(),
    ],
  });
  const hiddenInitialValues = {
    sourceCode: 'sourceCode-example',
    formId: 'formID',
  };
  const submissionValues = {
    single_checkbox: '',
    multi_checkbox: ['phoneOptIn'],
  };
  global.dataLayer = [];

  sendAnalyticsSubmissionEvent(
    submissionValues,
    formFields,
    hiddenInitialValues
  );
  // The two fields that have are supposed to be pass to the
  // dataLayer have the correct values
  expect(global.dataLayer[0].phoneOptIn).toEqual(true);
  expect(global.dataLayer[0].smsOptIn).toEqual(false);

  // source code and formId are passed
  expect(global.dataLayer[0].sourceCode).toEqual(
    hiddenInitialValues.sourceCode
  );
  expect(global.dataLayer[0].formId).toEqual(hiddenInitialValues.formId);
});
