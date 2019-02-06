import { createFactory } from './test-factories';

export const selectField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Drop down',
  fieldLabel: 'Title',
  required: true,
  placeholder: null,
  toolTip: null,
  defaultValue: 'miss',
  machineName: 'title',
  valueOptions: [
    {
      value: 'mrs',
      label: 'Mrs',
    },
    {
      value: 'miss',
      label: 'Miss',
    },
    {
      value: 'mr',
      label: 'Mr',
    },
  ],
});

export const textField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Text field',
  fieldLabel: 'First Name',
  required: true,
  placeholder: 'Forename',
  toolTip: 'First name tool tip',
  defaultValue: null,
  machineName: 'first_name',
  valueOptions: null,
});

export const singleCheckboxField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Checkboxes',
  fieldLabel: 'A single checkbox',
  required: true,
  placeholder: null,
  toolTip: null,
  defaultValue: null,
  machineName: 'single_checkbox',
  valueOptions: [
    {
      value: 'single',
      label: 'A single checkbox option',
    },
  ],
});

export const multipleCheckboxField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Checkboxes',
  fieldLabel: 'Multi checkbox',
  required: null,
  placeholder: null,
  toolTip: null,
  defaultValue: 'two',
  machineName: 'multi_checkbox',
  valueOptions: [
    {
      value: 'one',
      label: 'Checkbox option one',
    },
    {
      value: 'two',
      label: ' Checkbox option Two',
    },
    {
      value: 'three',
      label: ' Checkbox option Three',
    },
  ],
});

export const singleRadioField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Radio Buttons',
  fieldLabel: 'A single radio button',
  required: true,
  placeholder: null,
  toolTip: 'A tool tip for the single radio',
  defaultValue: null,
  machineName: 'single_radio',
  valueOptions: [
    {
      value: 'one',
      label: 'Single radio option',
    },
  ],
});

export const multipleRadioField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Radio Buttons',
  fieldLabel: 'Multiple radio buttons',
  required: null,
  placeholder: null,
  toolTip: null,
  defaultValue: 'two',
  machineName: 'multi_radio',
  valueOptions: [
    {
      value: 'one',
      label: 'Multiple radio option one',
    },
    {
      value: 'two',
      label: 'Multiple radio option two',
    },
    {
      value: 'three',
      label: 'Multiple radio option three',
    },
  ],
});

export const emailTextField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Email',
  fieldLabel: 'Email address',
  required: null,
  placeholder: 'Your email',
  toolTip: null,
  defaultValue: null,
  machineName: 'email',
  valueOptions: null,
});

export const numberTextField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Phone number',
  fieldLabel: 'Phone number',
  required: null,
  placeholder: 'Phone number',
  toolTip: null,
  defaultValue: null,
  machineName: 'phone',
  valueOptions: null,
});

export const numericTextField = createFactory({
  internal: {
    type: 'ContentfulTopicFormField',
  },
  fieldType: 'Numeric',
  fieldLabel: 'Number',
  required: null,
  placeholder: '50.00',
  toolTip: null,
  defaultValue: null,
  machineName: 'number',
  valueOptions: null,
});
