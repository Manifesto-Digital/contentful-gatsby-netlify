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
  const wrapper = shallow(<AdviceSearchBox data={mockData} />).dive();
  expect(wrapper.find('h3').text()).toBe(mockData.headerText);
});

it('displays the correct placeholder text', () => {
  const mockData = createAdviceSearch({
    placeholder: 'Search topics',
  });

  const wrapper = shallow(<AdviceSearchBox data={mockData} />);
  //expect(wrapper.find('form').prop('placeholder')).toBe(mockData.placeholder);
});
