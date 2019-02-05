import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import TwoColumnTextAndImageBlock from './index';
import { TextWrapper, HeaderText } from './styles';
import {
  createFactory,
  createChildContentfulRichText,
  createImage,
} from '../../utils/test-factories';
import RichText from '../rich-text';

// Default props
export const createTwoColumnTextAndImageBlock = createFactory({
  headerText: 'Mock header',
  leftColumnText: createChildContentfulRichText(),
  rightColumnImage: createImage(),
  theme: 'white',
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
  console.log(wrapper.find(TextWrapper).props());
  // expect(wrapper.find(TextWrapper).text()).toBe(mockData.leftColumnText);
});

/*
it('displays the correct theme colour', () => {
  const mockData = createTwoColumnTextAndImageBlock({ theme: 'Grey' });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(OuterContainer).theme).toBe(mockData.theme);
});
*/
