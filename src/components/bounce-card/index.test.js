import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import BounceCard from './index';

it('renders correctly', () => {
  snapshotComponent(<BounceCard />);
});
