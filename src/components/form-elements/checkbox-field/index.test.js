import React from 'react';
import * as Yup from 'yup';
import CheckboxField from '.';
import { mountWithTheme } from '../../../../__tests__/helpers';
import { FormikWrapper } from '../../../utils/test-form-wrapper';
import { createFactory } from '../../../utils/test-factories';
import { multipleCheckboxField } from '../../../utils/test-form-factories';
import { Input } from './styles';

const createFieldProps = createFactory(multipleCheckboxField());

it('Check if a checkbox with multiple options can be checked and unchecked', () => {
  const fieldName = 'checkboxFieldName';
  const fieldProps = createFieldProps({ machineName: fieldName });
  const formInitialValues = {
    [fieldName]: [], // No default value
  };
  const validation = {
    [fieldName]: Yup.array(),
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <CheckboxField field={fieldProps} />}
    />
  );
  const firstCheckbox = () => wrapper.find(Input).at(0);

  firstCheckbox().simulate('change', {
    target: { checked: true, value: firstCheckbox().props().value },
  });

  wrapper.update();

  // This also tests that the form values are updated and then the value is in
  // an array format that then checks the checkbox
  expect(firstCheckbox().prop('checked')).toBe(true);

  firstCheckbox().simulate('change', {
    target: { checked: false, value: firstCheckbox().props().value },
  });

  wrapper.update();
  expect(firstCheckbox().prop('checked')).toBe(false);
});

it('Check if single checkbox option can be checked and unchecked', () => {
  const fieldName = 'checkboxFieldName2';
  const fieldProps = createFieldProps({
    machineName: fieldName,
    valueOptions: [{ value: 'value1', label: 'Option 1' }],
  });
  const formInitialValues = {
    [fieldName]: '', // No default value
  };
  const validation = {
    [fieldName]: Yup.string().required(),
  };
  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <CheckboxField field={fieldProps} />}
    />
  );

  const onlyCheckbox = () => wrapper.find(Input).at(0);
  onlyCheckbox().simulate('change', {
    target: { checked: true, value: onlyCheckbox().props().value },
  });

  wrapper.update();

  // This also tests that the form values are updated and then the value is in
  // an array format that then checks the checkbox
  expect(onlyCheckbox().prop('checked')).toBe(true);
  onlyCheckbox().simulate('change', {
    target: { checked: false, value: onlyCheckbox().props().value },
  });

  wrapper.update();
  expect(onlyCheckbox().prop('checked')).toBe(false);
});

it('respects default value in a checkbox field with multiple options', () => {
  const fieldName = 'checkboxFieldName';
  const fieldProps = createFieldProps({
    machineName: fieldName,
    valueOptions: [
      { value: 'value1', label: 'Option 1' },
      { value: 'value2', label: 'Option 2' },
    ],
  });
  const formInitialValues = {
    [fieldName]: ['value2'], // Has default value
  };
  const validation = {
    [fieldName]: Yup.array(),
  };
  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <CheckboxField field={fieldProps} />}
    />
  );

  // First option to not be checked
  expect(
    wrapper
      .find(Input)
      .at(0)
      .prop('checked')
  ).toBe(false);

  // Second option to be checked due to default value
  expect(
    wrapper
      .find(Input)
      .at(1)
      .prop('checked')
  ).toBe(true);
});

it('respects default value in a checkbox with a single option', () => {
  const fieldName = 'checkboxFieldName';
  const fieldProps = createFieldProps({
    machineName: fieldName,
    valueOptions: [{ value: 'value1', label: 'Option 1' }],
  });
  const formInitialValues = {
    [fieldName]: 'value1', // Has default value
  };
  const validation = {
    [fieldName]: Yup.string().required(),
  };
  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <CheckboxField field={fieldProps} />}
    />
  );

  // First and only option to be checked
  expect(
    wrapper
      .find(Input)
      .at(0)
      .prop('checked')
  ).toBe(true);
});
