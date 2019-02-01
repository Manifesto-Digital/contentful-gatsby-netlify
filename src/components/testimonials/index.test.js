import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import {
  createFactory,
  createImage,
  createChildContentfulRichText,
} from '../../utils/test-factories';
import Testimonials from './index';
import Testimonial from './testimonial';
import { ImageContainer, Author } from './styles';

export const createTestimonial = createFactory({
  image: createImage(),
  text: createChildContentfulRichText(),
  author: 'Owen, London',
  boxBackground: 'White',
  loopIndex: 0,
});

export const createTestimonials = createFactory({
  headerText: 'Testimonials about this cool component',
  testimonials: [
    createTestimonial({ loopIndex: 0 }),
    createTestimonial({ loopIndex: 1 }),
  ],
});

it('renders testimonials correctly', () => {
  const mockData = createTestimonials();

  snapshotComponent(<Testimonials data={mockData} />);
});

it('renders a single testimonial correctly', () => {
  const mockData = createTestimonial();

  snapshotComponent(<Testimonial data={mockData} />);
});

it('displays the correct testimonial author', () => {
  const mockData = createTestimonial({ author: 'my mock author' });
  const wrapper = mountWithTheme(<Testimonial data={mockData} />);
  expect(wrapper.find(Author).text()).toContain(mockData.author);
});

it('passes the correct order value to the image container', () => {
  const mockData = createTestimonials();
  const wrapper = mountWithTheme(<Testimonials data={mockData} />);

  expect(
    wrapper
      .find(Testimonial)
      .at(0)
      .find(ImageContainer)
  ).toHaveStyleRule('order', '0', {
    media: '(min-width: 40.0625em)',
  });

  expect(
    wrapper
      .find(Testimonial)
      .at(1)
      .find(ImageContainer)
  ).toHaveStyleRule('order', '2', {
    media: '(min-width: 40.0625em)',
  });
});
