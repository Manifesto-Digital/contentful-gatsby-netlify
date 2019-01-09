import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/components/theme/variables';

export const renderWithProviders = component =>
  TestRenderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const snapshotComponent = (element, name) => {
  const tree = renderWithProviders(element).toJSON();

  expect(tree).toMatchSnapshot(name);
};

export const mountWithProviders = component =>
  mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
