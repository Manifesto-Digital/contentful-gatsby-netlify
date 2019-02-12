import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import Perks from './index';
import { Wrapper, IconWrapper } from './styles';
import iconSrc from '../../utils/iconSrc';
import theme from '../theme/variables';

export const createPerks = createFactory({
  headerText: 'This is a list of cool perks',
  backgroundColour: 'Black',
  eventIcons: [
    'Technical Running Top',
    "Finisher's Medal",
    'Free Bag Transfer',
    'Goodie Bags',
    'Post-Race Celebration',
  ],
  removeBottomMargin: true,
});

it('renders correctly', () => {
  const mockData = createPerks();

  snapshotComponent(<Perks data={mockData} />);
});

it('displays the correct background colour based on the prop passed', () => {
  const mockData = createPerks({ theme: 'Black' });
  const wrapper = mountWithTheme(<Perks data={mockData} />);

  expect(wrapper.find(Wrapper)).toHaveStyleRule(
    'background-color',
    theme.palette.pureBlack
  );
});

it('displays the correct icon based on what is passed in the eventIcons array', () => {
  const mockData = createPerks({
    eventIcons: ['Goodie Bags', 'Post-Race Celebration'],
  });

  const wrapper = mountWithTheme(<Perks data={mockData} />);

  expect(
    wrapper
      .find(IconWrapper)
      .at(0)
      .prop('src')
  ).toBe(iconSrc('Goodie Bags'));
  expect(
    wrapper
      .find(IconWrapper)
      .at(1)
      .prop('src')
  ).toBe(iconSrc('Post-Race Celebration'));
});
