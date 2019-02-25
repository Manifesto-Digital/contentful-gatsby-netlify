import React from 'react';
import * as Yup from 'yup';
import RatingField from '.';
import { mountWithTheme } from '../../../../__tests__/helpers';
import { FormikWrapper } from '../../../utils/test-form-wrapper';

const fieldName = 'radioFieldName';
const validation = {
  [fieldName]: Yup.string(),
};

it('Check if a radio button can be checked', () => {
  const formInitialValues = {
    [fieldName]: '', // No default value
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <RatingField name={fieldName} />}
    />
  );
  const firstRadio = () => wrapper.find('input').at(0);

  expect(firstRadio().prop('checked')).toBe(false);
  firstRadio().simulate('change', {
    target: {
      checked: true,
      value: '0',
      name: fieldName,
    },
  });
  wrapper.update();

  expect(firstRadio().prop('checked')).toBe(true);
});

it('Check if a radio button respects default value', () => {
  const formInitialValues = {
    [fieldName]: '0', // First radio button default
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <RatingField name={fieldName} />}
    />
  );
  const firstRadio = () => wrapper.find('input').at(0);
  const secondRadio = () => wrapper.find('input').at(1);

  expect(firstRadio().prop('checked')).toBe(true);
  expect(secondRadio().prop('checked')).toBe(false);

  secondRadio().simulate('change', {
    target: {
      checked: true,
      value: '1',
      name: fieldName,
    },
  });
  wrapper.update();

  // Check that the radio check states have updated following the simulate state change
  expect(firstRadio().prop('checked')).toBe(false);
  expect(secondRadio().prop('checked')).toBe(true);
});

it('shows a scale of 0 - 10 inputs', () => {
  const formInitialValues = {
    [fieldName]: '', // No default value
  };

  const wrapper = mountWithTheme(
    <FormikWrapper
      initialValues={formInitialValues}
      validation={validation}
      render={() => <RatingField name={fieldName} />}
    />
  );

  wrapper.find('input').forEach((input, i) => {
    expect(input.prop('value')).toBe(i);
  });
});
