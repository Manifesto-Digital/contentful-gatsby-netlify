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
export const createCardWithIcon = createFactory({
  icon: createImage(),
  titleText: 'Title text',
  subText: 'Sub text',
  ctaText: 'Click me',
  ctaLink: 'https://example.com',
});

it('renders correctly', () => {
  const mockData = createCardWithIcon();

  snapshotComponent(<CardWithIcon data={mockData} />);
});

it('displays the correct icon', () => {
  const mockData = createCardWithIcon({ icon: createImage() });
  const wrapper = mountWithTheme(<CardWithIcon data={mockData} />);
  expect(wrapper.find('img').prop('src')).toBe(mockData.icon.file.url);
});

it('displays the correct title text', () => {
  const mockData = createCardWithIcon({ titleText: 'Test title text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  expect(wrapper.find(TitleText).text()).toBe(mockData.titleText);
});

it('displays the correct sub text', () => {
  const mockData = createCardWithIcon({ subText: 'Test sub text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  expect(wrapper.find(SubText).text()).toBe(mockData.titleText);
});

it('displays the correct cta text', () => {
  const mockData = createCardWithIcon({ ctaText: 'Test cta text' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  // TODO: Test that this works
  expect(wrapper.find(CTA).prop('buttonText')).toBe(mockData.titleText);
});

it('displays the correct cta link', () => {
  const mockData = createCardWithIcon({ subText: 'Test cya link' });
  const wrapper = shallow(<CardWithIcon data={mockData} />);
  // TODO: Test that this works
  expect(wrapper.find(CTA).prop('externalUrl')).toBe(mockData.titleText);
});
