import React from 'react';
import { snapshotComponent } from 'test-helpers';
import Grid from './index';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';

// Default props
export const createContentGrid = createFactory({
  grid1: createChildContentfulRichText(),
  grid2: createChildContentfulRichText(),
  grid3: createChildContentfulRichText(),
  grid4: createChildContentfulRichText(),
});

it('renders correctly', () => {
  const mockData = createContentGrid();

  snapshotComponent(<Grid content={mockData} />);
});
