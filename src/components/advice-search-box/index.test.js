import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import AdviceSearchBox from './index';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createAdviceSearch = createFactory({
  headerText: 'Search our housing advice',
  placeholder: 'Search topics',
  collectionToSearch: 'England',
});

it('renders correctly', () => {
  const mockData = createAdviceSearch();
  snapshotComponent(<AdviceSearchBox data={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createAdviceSearch({
    headerText: 'Search our housing advice',
  });
  const wrapper = mountWithTheme(<AdviceSearchBox data={mockData} />);
  expect(wrapper.find('h3').text()).toBe(mockData.headerText);
});
