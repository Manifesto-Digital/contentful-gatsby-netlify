import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import ContentCard from './index';
import { Card } from './styles';
import {
  createFactory,
  createInternalLink,
  createImage,
} from '../../utils/test-factories';
// import { createContentCard } from '../content-card/index.test';

// Default prop values
export const createContentCard = createFactory({
  featuredImage:
    '//images.ctfassets.net/6sxvmndnpn0s/1HUDqhTjFiaQ8cm4mAQGaE/70317d8a3ff040ddf9c613105cdac1e0/Vertical_rush_hero.jpg',
  cropImageFrom: 'Top_Right',
  title: 'Shelter Demo Page',
  summaryText: 'Lorem ipsum dolor sit amet, consectetur',
  slug: 'shelter-demo-page',
});

it('renders correctly', () => {
  const mockData = createContentCard();

  snapshotComponent(
    <Card
      featuredImage={mockData.featuredImage}
      cropImageFrom={mockData.cropImageFrom}
      title={mockData.title}
      summaryText={mockData.summaryText}
      slug={mockData.slug}
    />
  );
});
