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
import Testimonial from './testimonial';
import { Author } from './styles';

export const createTestimonial = createFactory({
  image: createImage(),
  text: createChildContentfulRichText(),
  author: 'Owen, London',
  backgroundColour: 'White',
  loopIndex: 0,
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

it('displays the specified image correctly', () => {
  const mockData = createTestimonial();
  const wrapper = mountWithTheme(<Testimonial data={mockData} />);
  expect(wrapper.find('img').prop('src')).toContain(mockData.image.file.url);
});
