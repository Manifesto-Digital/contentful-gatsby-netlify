import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/components/theme/variables';
import * as FormProvider from '../../src/components/forms/provider';

export const renderWithProviders = component => {
  const submitForm = jest.fn();

  return {
    renderer: TestRenderer.create(
      <FormProvider.Provider submitForm={submitForm}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </FormProvider.Provider>
    ),
    submitForm,
  };
};

export const snapshotComponent = (element, name) => {
  const tree = renderWithProviders(element).renderer.toJSON();

  expect(tree).toMatchSnapshot(name);
};

export const mountWithProviders = component => {
  const submitForm = jest.fn();

  return {
    wrapper: mount(
      <FormProvider.Provider submitForm={submitForm}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </FormProvider.Provider>
    ),
    submitForm,
  };
};
