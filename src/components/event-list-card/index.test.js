import React from 'react';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createFactory, createImage } from '../../utils/test-factories';
import EventListCard from './index';

export const createEventListCard = createFactory({
  slug: 'my-slug',
  event: {
    thumbnailImage: createImage(),
    eventName: 'My Event',
    displayLocation: 'round the corner',
    eventDisplayDate: 'Yesterday',
  },
});

it('renders correctly', () => {
  const mockData = createEventListCard();

  snapshotComponent(<EventListCard data={mockData} />);
});

it('displays the specified image correctly', () => {
  const mockData = createEventListCard();
  const wrapper = mountWithTheme(<EventListCard data={mockData} />);
  expect(wrapper.find('img').prop('src')).toContain(
    mockData.event.thumbnailImage.file.url
  );
});

it('sets the correct CTA links', () => {
  const mockData = createEventListCard({ slug: 'my-test-slug' });
  const wrapper = mountWithTheme(<EventListCard data={mockData} />);

  expect(
    wrapper
      .find(Link)
      .at(0)
      .prop('to')
  ).toContain('my-test-slug');
});
