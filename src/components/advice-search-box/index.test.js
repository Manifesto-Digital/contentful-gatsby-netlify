import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
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
  const wrapper = shallow(<AdviceSearchBox data={mockData} />);
  expect(
    wrapper
      .dive()
      .find('h3')
      .text()
  ).toBe(mockData.headerText);
});
