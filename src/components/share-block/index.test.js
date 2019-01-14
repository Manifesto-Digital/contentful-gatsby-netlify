import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import ShareBlock from './index';

// Default props
export const createShareBlock = createFactory();

it('renders', () => {
  snapshotComponent(<ShareBlock />);
});
