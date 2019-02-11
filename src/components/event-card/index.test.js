import React from 'react';
import { createFactory, createImage } from '../../utils/test-factories';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import EventCard from './index';

export const createEventCard = createFactory({
  event: {
    thumbnailImage: createImage(),
    eventName: 'My Event',
  },
  cardText: 'Description for my event',
  primaryCtaText: 'Register for event',
  primaryCtaLink: [{ slug: '/my-event' }],
  secondaryCtaText: 'Register for event',
  secondaryCtaLink: { slug: '/event-categories' },
});

it('renders correctly', () => {
  const mockData = createEventCard();

  snapshotComponent(<EventCard data={mockData} />);
});

it('displays the specified image correctly', () => {
  const mockData = createEventCard();
  const wrapper = mountWithTheme(<EventCard data={mockData} />);
  expect(wrapper.find('img').prop('src')).toContain(
    mockData.event.thumbnailImage.file.url
  );
});

it('sets the correct CTA link', () => {
  const mockData = createEventCard({
    primaryCtaLink: [{ slug: 'my-test-slug' }],
  });
  const wrapper = mountWithTheme(<EventCard data={mockData} />);
  expect(
    wrapper
      .find('a')
      .at(0)
      .prop('href')
  ).toEqual('/my-test-slug');
});
