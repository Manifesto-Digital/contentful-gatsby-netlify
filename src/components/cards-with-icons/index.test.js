import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import { createCardWithIcon } from '../card-with-icon/index.test';
import CardsWithIcons from '.';
import CardWithIcon from '../card-with-icon';

// Default props
export const createCardsWithIcon = createFactory({
  cards: [createCardWithIcon(), createCardWithIcon(), createCardWithIcon()],
});

it('renders correctly', () => {
  const mockData = createCardsWithIcon();
  snapshotComponent(<CardsWithIcons data={mockData} />);
});

it('renders the amoount of cards passed', () => {
  const mockData = createCardsWithIcon();
  const wrapper = shallow(<CardsWithIcons data={mockData} />);
  const amountOfCards = mockData.cards.length;

  expect(wrapper.find(CardWithIcon)).toHaveLength(amountOfCards);
});
