import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import { createFactory, createImage } from '../../../utils/test-factories';
import ShopHero from '.';

// Default props
export const createShopHero = createFactory({
  header: 'Mock header',
  subHeader: 'Mock sub header',
  contactNumber: '12345678910',
  introductoryText: 'mock introductory text',
  image: createImage(),
});

it('renders correctly', () => {
  const mockData = createShopHero();
  snapshotComponent(<ShopHero {...mockData} />);
});

it('always renders the H1', () => {
  const mockData = createShopHero({ header: 'Updated mock header' });
  const wrapper = shallow(<ShopHero {...mockData} />);
  expect(wrapper.find('h1').text()).toEqual(mockData.header);
});

it('renders the contact number', () => {
  const mockData = createShopHero({ header: 'Updated mock header' });
  const wrapper = shallow(<ShopHero {...mockData} />);
  expect(wrapper.text()).toContain(mockData.contactNumber);
});
