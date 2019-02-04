import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import TwoColumnTextAndImageBlock from './index';
import { OuterContainer, HeaderText } from './styles';
import { createFactory } from '../../utils/test-factories';
import RichText from '../rich-text';

// Default props
export const createTwoColumnTextAndImageBlock = createFactory({
  headerText: 'Mock header',
  leftColumnText: 'This is some mock content for the left',
  theme: 'White',
});

it('renders correctly', () => {
  const mockData = createTwoColumnTextAndImageBlock();

  snapshotComponent(<TwoColumnTextAndImageBlock data={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    headerText: 'Different header text',
  });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(HeaderText).text()).toBe(mockData.headerText);
});

it('displays the correct left column text', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    leftColumnText: 'Test left column text',
  });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(RichText).text()).toBe(mockData.leftColumnText);
});

it('displays the correct theme colour', () => {
  const mockData = createTwoColumnTextAndImageBlock({ theme: 'Grey' });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(OuterContainer).theme).toBe(mockData.theme);
});
