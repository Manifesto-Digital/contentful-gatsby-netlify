import React from 'react';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import ShopSidebar from './index';

export const createShopSidebar = createFactory({
  type: 'Boutique',
  displayAddress: createChildContentfulRichText(),
  contactNumber: '01234567890',
  contactEmail: 'email@shelter.org.uk',
  openingHours: createChildContentfulRichText(),
  parkingInformation: createChildContentfulRichText(),
  disabledAccessInformation: createChildContentfulRichText(),
});

it('renders correctly', () => {
  const mockData = createShopSidebar();

  snapshotComponent(<ShopSidebar data={mockData} />);
});

it('displays the Furniture accepted section if the shop is a furniture shop', () => {
  const mockData = createShopSidebar({ type: 'Furniture' });
  const wrapper = mountWithTheme(<ShopSidebar data={mockData} />);

  expect(
    wrapper
      .find('h3')
      .at(3)
      .text()
  ).toEqual('Furniture accepted');
});
