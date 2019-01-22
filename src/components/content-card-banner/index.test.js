import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import ContentCardBanner from './index';
import { BannerBackground } from './styles';
import {
  createFactory,
  createInternalLink,
  createImage,
} from '../../utils/test-factories';
// import { createContentCard } from '../content-card/index.test';

// Default prop values
export const createContentCardBanner = createFactory({
  bannerColour: 'Grey',
  header: 'Join our cause <a href="https://www.google.co.uk">now</a>',
  // contentCards: createContentCards({
  //  ctaColour: 'White Outline',
  //  internalLink: null
  // }),
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
