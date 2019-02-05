// TODO: Add test code
/*
import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import CardWithIcon from './index';
import { TitleText, SubText } from './styles';
import CTA from '../cta/index';
import { createFactory, createImage } from '../../utils/test-factories';

// Default props
export const createCardsWithIcon = createFactory({
  titleText: 'Title text',
  subText: 'Sub text',
  ctaText: 'Click me',
  ctaLink: 'https://example.com',
});

it('renders correctly', () => {
  const mockData = createCardsWithIcon();

  snapshotComponent(<CardWithIcon data={mockData} />);
});

it('displays the correct title text', () => {
  const mockData = createCardsWithIcon({ titleText: 'Test title text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  expect(wrapper.find(TitleText).text()).toBe(mockData.titleText);
});

it('displays the correct sub text', () => {
  const mockData = createCardsWithIcon({ subText: 'Test sub text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  expect(wrapper.find(SubText).text()).toBe(mockData.titleText);
});

it('displays the correct cta text', () => {
  const mockData = createCardWithIcon({ ctaText: 'Test cta text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  expect(wrapper.find(CTA).text()).toBe(mockData.titleText);
});

it('displays the correct cta link', () => {
  const mockData = createCardWithIcon({ subText: 'Test cya link' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  // TODO: Set the correct getter instead of ".url()"
  expect(wrapper.find(CTA).url()).toBe(mockData.titleText);
});

it('displays an icon if provided', () => {
  const mockData = createCardWithIcon({ icon: createImage() });
  const wrapper = mountWithTheme(<CardWithIcon data={mockData} />);
  expect(wrapper.find('img').prop('src')).toBe(mockData.icon.file.url);
});
*/
