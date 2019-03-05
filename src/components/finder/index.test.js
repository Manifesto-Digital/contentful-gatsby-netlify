import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/variables';
import { data as locations } from '../../../__mocks__/locations.json';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';

import Finder from './index';

process.env.SEARCH_KEY = 'TEST_API_KEY';
const searchLocation = 'Bristol';

// Any request sent to this address will return our mock location data
// Reject anything else

beforeEach(() => {
  const mockSearchRequest = new MockAdapter(axios);
  mockSearchRequest
    .onGet(
      `https://staging.services.shelter.org.uk/api/v1/location/${searchLocation}?api_token=TEST_API_KEY`
    )
    .reply(200, {
      data: locations,
    })
    .onAny()
    .reply(500);
});

const createFinder = createFactory({
  titleText: 'Topic - Services Finder',
  introText: createChildContentfulRichText(),
});

it('Renders correctly', async () => {
  const mockData = createFinder();
  const wrapper = render(
    <ThemeProvider theme={theme}>
      <Finder data={mockData} type="services" />
    </ThemeProvider>
  );
  expect(wrapper).toMatchSnapshot();
});

it('Displays a response based on the query', async () => {
  const mockData = createFinder();

  // render component
  const { getByText, getByTestId, rerender } = render(
    <ThemeProvider theme={theme}>
      <Finder data={mockData} type="services" />
    </ThemeProvider>
  );

  // Update the input
  act(() => {
    fireEvent.change(getByTestId('search-input'), {
      target: { value: searchLocation },
    });
  });

  // Submit the form
  // These two have to be wrapped in separate act() funcs
  // otherwise they fire simultaneously
  act(() => {
    fireEvent.click(getByText('Find'));
  });

  // re-render our component with updated data
  rerender(
    <ThemeProvider theme={theme}>
      <Finder data={mockData} type="services" />
    </ThemeProvider>
  );

  await waitForElement(() => getByTestId('results'));

  expect(getByText('The nearest services to Bristol are:')).not.toBeNull();
  expect(getByText('Shelter Bristol')).not.toBeNull();
  expect(getByText('2.4 miles away')).not.toBeNull();
  expect(getByTestId('results-list').children.length).toEqual(3);
});

it('Displays an error message if nothing is returned', async () => {
  const mockData = createFinder();

  // render component
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Finder data={mockData} type="services" />
    </ThemeProvider>
  );

  act(() => {
    fireEvent.click(getByText('Find'));
  });

  // This will fail because nothing is passed and we get a 500
  expect(
    getByText(
      "Sorry, we couldn't find any results based on your search, please try again"
    )
  ).not.toBeNull();
});
