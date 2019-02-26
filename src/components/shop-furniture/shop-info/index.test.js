import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../../__tests__/helpers/index';
import { createFactory } from '../../../utils/test-factories';
import ShopInfo from '.';
import { Heading } from './styles';

// Default props
export const createShopInfo = createFactory({
  address: {
    childContentfulRichText: {
      html: '<p>51 Church Road \nLondon\nSW13 9HH</p>',
    },
  },
  openingHours: {
    childContentfulRichText: {
      html:
        '<p><strong>Mon to Sat</strong>: 10am to 6pm\n<strong>Sunday</strong>: 11am to 5pm</p>',
    },
  },
  parking: {
    childContentfulRichText: {
      html: '<p>No parking</p>',
    },
  },
  disabledAccess: {
    childContentfulRichText: {
      html: '<p>No disabled access</p>',
    },
  },
});

it('renders correctly', () => {
  const mockData = createShopInfo();
  snapshotComponent(<ShopInfo {...mockData} />);
});

it('renders the 4 shop information headings', () => {
  const mockData = createShopInfo();
  const wrapper = shallow(<ShopInfo {...mockData} />);
  const headingsToMatch = [
    'Address',
    'Opening hours',
    'Parking',
    'Disabled access',
  ];

  // Find all headings rendered and store them in an array
  const headings = wrapper.find(Heading).map(x => x.text());

  headingsToMatch.forEach(heading => {
    expect(headings.includes(heading)).toBe(true);
  });
});
