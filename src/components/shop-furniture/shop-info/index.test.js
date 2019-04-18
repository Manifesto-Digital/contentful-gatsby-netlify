import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import { createFactory } from '../../../utils/test-factories';
import ShopInfo from '.';
import { Heading } from './styles';

// Default props
export const createShopInfo = createFactory({
  address: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Church road, Glasgow',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
  },
  openingHours: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Mon to Sat, 9 - 5',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
  },
  parking: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'No parking',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
  },
  disabledAccess: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '2 Disabled Bays Available',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
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
