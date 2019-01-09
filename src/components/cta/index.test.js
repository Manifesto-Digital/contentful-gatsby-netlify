import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithProviders,
} from '../../../__tests__/helpers/index';
import CTA from './index';
import { StyledLinkHandler } from './styles';
import {
  createFactory,
  createInternalLink,
  createImage,
} from '../../utils/test-factories';

// Default props
export const createCTA = createFactory({
  buttonText: 'Button text',
  ctaColour: 'Red',
  internalLink: createInternalLink(),
  externalUrl: 'http://example.com',
});

it('renders correctly', () => {
  const mockData = createCTA();

  snapshotComponent(<CTA cta={mockData} />);
});

it('displays the correct text', () => {
  const mockData = createCTA({ buttonText: 'Mock button text' });
  const wrapper = shallow(<CTA cta={mockData} />);
  expect(wrapper.find(StyledLinkHandler).text()).toBe(mockData.buttonText);
});

it('displays an icon if provided', () => {
  const mockData = createCTA({ icon: createImage() });
  const { wrapper } = mountWithProviders(<CTA cta={mockData} />);
  expect(wrapper.find('img').prop('src')).toBe(mockData.icon.file.url);
});
