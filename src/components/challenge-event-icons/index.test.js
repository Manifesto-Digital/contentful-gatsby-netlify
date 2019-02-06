import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import ChallengeEventIcons from './index';
import { Wrapper, IconWrapper } from './styles';
import iconSrc from '../styled/iconSrc';
import { consistentString } from '../../utils/content-formatting';

export const createChallengeEventIcons = createFactory({
  headerText: 'This is a list of cool perks',
  theme: 'Black',
  eventIcons: [
    'Technical Running Top',
    "Finisher's Medal",
    'Free Bag Transfer',
    'Goodie Bags',
    'Post-Race Celebration',
  ],
});

it('renders correctly', () => {
  const mockData = createChallengeEventIcons();

  snapshotComponent(<ChallengeEventIcons data={mockData} />);
});

it('displays the correct background colour based on the prop passed', () => {
  const mockData = createChallengeEventIcons({ theme: 'Black' });
  const wrapper = mountWithTheme(<ChallengeEventIcons data={mockData} />);

  expect(wrapper.find(Wrapper)).toHaveStyleRule('background-color', '#000000');
});

it('displays the correct icon based on what is passed in the eventIcons array', () => {
  const mockData = createChallengeEventIcons({
    eventIcons: ['Goodie Bags', 'Post-Race Celebration'],
  });

  const wrapper = mountWithTheme(<ChallengeEventIcons data={mockData} />);

  expect(
    wrapper
      .find(IconWrapper)
      .at(0)
      .prop('src')
  ).toBe(iconSrc(consistentString('Goodie Bags')));
  expect(
    wrapper
      .find(IconWrapper)
      .at(1)
      .prop('src')
  ).toBe(iconSrc(consistentString('Post-Race Celebration')));
});
