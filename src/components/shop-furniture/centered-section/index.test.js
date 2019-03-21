import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../../utils/test-factories';
import CenteredSection from '.';

// Default props
export const createCenteredSection = createFactory({
  header: 'Mock header',
  text: createChildContentfulRichText(),
  contactNumber: '012345 67890',
});

it('renders correctly', () => {
  const mockData = createCenteredSection();
  snapshotComponent(<CenteredSection {...mockData} />);
});

it('renders a header 2', () => {
  const mockData = createCenteredSection({ header: 'New header text' });
  const wrapper = shallow(<CenteredSection {...mockData} />);
  expect(wrapper.find('h2').text()).toEqual(mockData.header);
});

it('renders the contact number', () => {
  const mockData = createCenteredSection({ contactNumber: '12345 678910' });
  const wrapper = shallow(<CenteredSection {...mockData} />);
  expect(wrapper.text()).toContain(mockData.contactNumber);
});
