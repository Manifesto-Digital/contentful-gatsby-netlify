import React from 'react';
import { shallow } from 'enzyme';
import { mountWithTheme, snapshotComponent } from 'test-helpers';
import Hero from './hero-with-card';
import { Title, CardSubtitle } from './styles';
import {
  createFactory,
  createImage,
  createExternalRef,
} from '../../utils/test-factories';

// Default props
export const createHeroWithCard = createFactory({
  title: 'Mock Title',
  subtitle: 'Mock Subtitle',
  cardPosition: 'Right',
  blackText: true,
  image: createImage(),
  link: createExternalRef(),
  linkText: 'Woo amazing link text',
});

it('renders correctly', () => {
  const mockData = createHeroWithCard();

  snapshotComponent(<Hero content={mockData} />);
});

it('displays the correct title', () => {
  const mockData = createHeroWithCard({ title: 'Mock Title' });

  const wrapper = shallow(<Hero content={mockData} />);
  expect(wrapper.find(Title).text()).toBe(mockData.title);
});

it('displays the correct subtitle', () => {
  const mockData = createHeroWithCard({ subtitle: 'Mock Subtitle' });

  const wrapper = shallow(<Hero content={mockData} />);
  expect(wrapper.find(CardSubtitle).text()).toBe(mockData.subtitle);
});

it('renders an image', () => {
  const mockData = createHeroWithCard({
    image: createImage({
      file: {
        url: 'https://via.placeholder.com/150',
      },
    }),
  });

  const wrapper = mountWithTheme(<Hero content={mockData} />);
  expect(wrapper.find('img')).toHaveLength(1);
});

it('renders the link', () => {
  const mockData = createHeroWithCard({
    externalLink: {
      URL: 'https://example.com',
      newTab: true,
    },
    linkText: 'Woo amazing link text',
  });

  const wrapper = mountWithTheme(<Hero content={mockData} />);
  expect(wrapper.find('a')).toHaveLength(1);
});
