import React from 'react';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createFactory, createImage } from '../../utils/test-factories';
import FeaturedEvent from './index';

export const createFeaturedEvent = createFactory({
  slug: 'my-slug',
  mainCtaText: 'Sign up for this cool event',
  event: {
    eventName: 'my event',
    displayLocation: 'Shoreditch high street',
    eventDisplayDate: 'Yesterday',
    distance: '12 yards',
    thumbnailImage: createImage(),
  },
});

it('renders correctly', () => {
  const mockData = createFeaturedEvent();

  snapshotComponent(<FeaturedEvent data={mockData} />);
});

it('displays the specified event thmubnail', () => {
  const mockData = createFeaturedEvent();
  const wrapper = mountWithTheme(<FeaturedEvent data={mockData} />);
  expect(wrapper.find('img').prop('src')).toContain(
    mockData.event.thumbnailImage.file.url
  );
});

it('links to the specified slug', () => {
  const mockData = createFeaturedEvent({ slug: 'my-test-slug' });
  const wrapper = mountWithTheme(<FeaturedEvent data={mockData} />);

  expect(
    wrapper
      .find(Link)
      .at(0)
      .prop('to')
  ).toContain('my-test-slug');
});
