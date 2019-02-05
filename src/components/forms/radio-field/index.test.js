import React from 'react';
import * as Yup from 'yup';
import RadioField from '.';
import { mountWithTheme } from '../../../../__tests__/helpers';
import { FormikWrapper } from '../../../utils/test-form-wrapper';
import { createFactory } from '../../../utils/test-factories';
import { multipleRadioField } from '../../../utils/test-form-factories';
import { Input } from './styles';

const createFieldProps = createFactory(multipleRadioField());

it('Check if a radio button can be checked', () => {
  const fieldName = 'radioFieldName';
  const fieldProps = createFieldProps({ machineName: fieldName });
  const formInitialValues = {
    [fieldName]: '', // No default value
  };
  const validation = {
    [fieldName]: Yup.string(),
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <RadioField field={fieldProps} />}
    />
  );
  const firstRadio = () => wrapper.find(Input).at(0);

  expect(firstRadio().prop('checked')).toBe(false);
  firstRadio().simulate('change', {
    target: {
      checked: true,
      value: fieldProps.valueOptions[0].value,
      name: fieldName,
    },
  });
  wrapper.update();
  expect(firstRadio().prop('checked')).toBe(true);
});

it('Check if a radio button respects default value', () => {
  const fieldName = 'radioFieldName';
  const fieldProps = createFieldProps({ machineName: fieldName });
  const formInitialValues = {
    [fieldName]: fieldProps.valueOptions[0].value, // First radio button default
  };
  const validation = {
    [fieldName]: Yup.string(),
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <RadioField field={fieldProps} />}
    />
  );
  const firstRadio = () => wrapper.find(Input).at(0);
  const secondRadio = () => wrapper.find(Input).at(1);

  expect(firstRadio().prop('checked')).toBe(true);

  expect(secondRadio().prop('checked')).toBe(false);

  secondRadio().simulate('change', {
    target: {
      checked: true,
      value: secondRadio().props().value,
      name: fieldName,
    },
  });
  wrapper.update();

  // Check that the radio check states have updated following the simulate state change
  expect(firstRadio().prop('checked')).toBe(false);
  expect(secondRadio().prop('checked')).toBe(true);
});
