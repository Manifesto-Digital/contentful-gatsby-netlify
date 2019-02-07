import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import { createCardWithIcon } from '../card-with-icon/index.test';
import CardsWithIcon from './index';

// Default props
export const createCardsWithIcon = createFactory({
  cards: [createCardWithIcon()],
});

it('renders correctly', () => {
  const mockData = createCardsWithIcon();
  snapshotComponent(<CardsWithIcon data={mockData} />);
});
