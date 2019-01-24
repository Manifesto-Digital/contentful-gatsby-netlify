import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/components/theme/variables';

export const renderWithTheme = component =>
  TestRenderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const snapshotComponent = (element, name) => {
  const tree = renderWithTheme(element).toJSON();

  expect(tree).toMatchSnapshot(name);
};

export const mountWithTheme = component =>
  mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const changeInput = (wrapper, value) => {
  const input = wrapper.getDOMNode();
  input.value = value;

  wrapper.simulate('change', {
    target: input,
    currentTarget: input,
  });
};

// From
// https://gist.github.com/gaearon/adf9d5500e11a4e7b2c6f7ebf994fe56
// https://github.com/facebook/react/issues/11098#issuecomment-412682721
export function expectRenderError(element, expectedError) {
  // Noop error boundary for testing.
  class TestBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { didError: false };
    }

    componentDidCatch(err) {
      this.setState({ didError: true });
    }

    render() {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      return this.state.didError ? null : this.props.children;
    }
  }

  // Record all errors.
  const topLevelErrors = [];
  function handleTopLevelError(event) {
    topLevelErrors.push(event.error);
    // Prevent logging
    event.preventDefault();
  }

  const div = document.createElement('div');
  window.addEventListener('error', handleTopLevelError);
  try {
    ReactDOM.render(<TestBoundary>{element}</TestBoundary>, div);
  } finally {
    window.removeEventListener('error', handleTopLevelError);
  }

  expect(topLevelErrors.length).toBe(1);
  expect(topLevelErrors[0].message).toContain(expectedError);
}
