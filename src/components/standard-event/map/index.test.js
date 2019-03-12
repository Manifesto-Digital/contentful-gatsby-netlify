import React from 'react';
import { snapshotComponent } from '../../../../__tests__/helpers/index';
import { createFactory } from '../../../utils/test-factories';
import EventMap from '.';

// Default props
export const createEventMapProps = createFactory({});

it('renders event map correctly', () => {
  process.env.GOOGLE_MAP_API_KEY = 'test';
  snapshotComponent(
    <EventMap
      eventLocation={{
        lat: 100,
        lon: -50,
      }}
    />
  );
});