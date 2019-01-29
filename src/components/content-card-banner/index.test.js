import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import { BannerBackground } from './styles';
import { createFactory } from '../../utils/test-factories';

// Default prop values
export const createContentCardBanner = createFactory({
  bannerColour: 'Grey',
  header: 'Join our cause <a href="https://www.google.co.uk">now</a>',
});

it('renders correctly', () => {
  const mockData = createContentCardBanner();

  snapshotComponent(
    <BannerBackground
      bannerColour={mockData.bannerColour}
      header={mockData.header}
    />
  );
});
