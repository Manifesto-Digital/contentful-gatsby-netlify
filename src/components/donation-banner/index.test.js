import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import DonationBanner from './index';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createBanner = createFactory({
  headerText: 'What an amazing banner',
});

it('renders correctly', () => {
  const mockBanner = createBanner();
  snapshotComponent(<DonationBanner banner={mockBanner} />);
});

it('renders a form', () => {
  const mockBanner = createBanner();
  const wrapper = mountWithTheme(<DonationBanner banner={mockBanner} />);
  expect(wrapper.find('form')).toHaveLength(1);
});

it('shows the correct h3 header text', () => {
  const mockBanner = createBanner({ headerText: 'This header text' });
  const wrapper = mountWithTheme(<DonationBanner banner={mockBanner} />);
  expect(wrapper.find('h3').text()).toEqual(mockBanner.headerText);
});
