import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import VideoEmbed from './index';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';

// Default props
export const createVideo = createFactory({
  title: "'The not knowing was pretty scary'",
  metaDescription: 'Lyndsay describes the moment she received a section 21',
  externalUrl: 'https://www.youtube.com/watch?v=lohPp0QdV-w',
  bottomText: createChildContentfulRichText(),
});

it('renders correctly', () => {
  const mockData = createVideo();
  snapshotComponent(<VideoEmbed data={mockData} />);
});

it('displays the correct title', () => {
  const mockData = createVideo({ title: 'Topic - Video Embed' });

  const wrapper = shallow(<VideoEmbed data={mockData} />);
  expect(wrapper.find('h3').text()).toBe(mockData.title);
});

it('displays a meta name', () => {
  const mockData = createVideo({
    title: 'Topic - Video Embed',
  });

  const wrapper = shallow(<VideoEmbed data={mockData} />);
  expect(wrapper.find('meta[itemProp="name"]').prop('content')).toBe(
    mockData.title
  );
});

it('displays a meta description', () => {
  const mockData = createVideo({
    metaDescription: 'Lyndsay describes the moment she received a section 21',
  });

  const wrapper = shallow(<VideoEmbed data={mockData} />);
  expect(wrapper.find('meta[itemProp="description"]').prop('content')).toBe(
    mockData.metaDescription
  );
});

it('displays a meta embedUrl', () => {
  const mockData = createVideo({
    title: 'Topic - Video Embed',
  });

  const wrapper = shallow(<VideoEmbed data={mockData} />);
  expect(wrapper.find('meta[itemProp="embedUrl"]').prop('content')).toBe(
    mockData.externalUrl
  );
});
