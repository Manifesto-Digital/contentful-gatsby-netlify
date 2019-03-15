import React from 'react';
import { snapshotComponent } from 'test-helpers';
import BounceCard from './index';

it('renders correctly', () => {
  snapshotComponent(<BounceCard />);
});
