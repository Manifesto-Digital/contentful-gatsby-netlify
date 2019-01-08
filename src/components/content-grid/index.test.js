import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import Grid from './index';
import { Item } from './styles';
import RichText from '../rich-text';
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
