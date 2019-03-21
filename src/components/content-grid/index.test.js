import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import Grid from '.';
import { Item } from './styles';
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
  border: false,
});

it('renders correctly', () => {
  const mockData = createContentGrid();
  snapshotComponent(<Grid content={mockData} />);
});

it('renders a border if chosen', () => {
  const mockData = createContentGrid({ border: true });

  const wrapper = mountWithTheme(<Grid content={mockData} />);

  expect(wrapper.find(Item).first()).toHaveStyleRule(
    'border-bottom',
    expect.any(String)
  );
});
