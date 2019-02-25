import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import Map from './index';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createLocations = createFactory({
  headerText: 'Topic - Google Map',
  locations: [
    {
      address: 'Bournemouth, UK',
      location: {
        lat: 52.240477,
        lon: -0.902655999999979,
      },
    },
    {
      address: '"Whitefriars House, 50 Fishergate, Norwich, NR3 1SE"',
      location: {
        lat: 52.6344036,
        lon: 1.299995899999999,
      },
    },
  ],
});

it('renders correctly', () => {
  const mockData = createLocations();
  snapshotComponent(<Map data={mockData} />);
});
