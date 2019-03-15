import React from 'react';
import { shallow } from 'enzyme';
import { mountWithTheme, snapshotComponent } from 'test-helpers';
import Hero from './hero-no-card';
import { Title, Subtitle } from './styles';
import { createFactory, createImage } from '../../utils/test-factories';

// Default props
export const createHeroNoCard = createFactory({
  title: 'Mock Title',
  subtitle: 'Mock Subtitle',
  blackText: true,
  image: createImage(),
});

it('renders correctly', () => {
  const mockData = createHeroNoCard();

  snapshotComponent(<Hero content={mockData} />);
});

it('displays the correct title', () => {
  const mockData = createHeroNoCard({ title: 'Mock Title' });

  const wrapper = shallow(<Hero content={mockData} />);
  expect(wrapper.find(Title).text()).toBe(mockData.title);
});

it('displays the correct subtitle', () => {
  const mockData = createHeroNoCard({ subtitle: 'Mock Subtitle' });

  const wrapper = shallow(<Hero content={mockData} />);
  expect(wrapper.find(Subtitle).text()).toBe(mockData.subtitle);
});

it('renders an image', () => {
  const mockData = createHeroNoCard({
    image: createImage({
      file: {
        url: 'https://via.placeholder.com/150',
      },
    }),
  });

  const wrapper = mountWithTheme(<Hero content={mockData} />);
  expect(wrapper.find('img')).toHaveLength(1);
});
