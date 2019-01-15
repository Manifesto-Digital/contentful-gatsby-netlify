import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import ShareBlock from './index';

// Default props
export const createShareBlock = createFactory({
  headerText: 'Yes it renders',
  shareType: ['Print', 'Email'],
});

it('renders Header Text', () => {
  const mockData = createShareBlock({
    headerText: 'Yes it renders',
  });
  snapshotComponent(<ShareBlock data={mockData} />);
});

it('renders a share block with links', () => {
  const mockData = createShareBlock({
    shareType: ['Print', 'Email'],
  });
  snapshotComponent(<ShareBlock data={mockData} />);
});

it('returns the correct site URLs with shareURL', () => {
  const mockData = createShareBlock({
    shareType: ['Print', 'Facebook'],
    Facebook:
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:8000/',
  });

  const wrapper = mountWithTheme(<ShareBlock data={mockData} />);
  expect(wrapper.find('a').prop('href')).toBe(mockData.Facebook);
});
