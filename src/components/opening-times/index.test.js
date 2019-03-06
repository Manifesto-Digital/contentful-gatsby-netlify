import React from 'react';
import { createFactory } from '../../utils/test-factories';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import OpeningTimes from './index';
import { Time } from './styles';
import theme from '../theme/variables';

jest.mock('../../utils/dates');

export const createOpeningTime = createFactory({
  mondayOpeningTimes: '10am to 6pm',
  tuesdayOpeningTimes: '10am to 6pm',
  wednesdayOpeningTimes: '10am to 6pm',
  thursdayOpeningTimes: '10am to 6pm',
  fridayOpeningTimes: '10am to 6pm',
  saturdayOpeningTimes: '10am to 6pm',
  sundayOpeningTimes: '10am to 6pm',
});

it('renders correctly', () => {
  const mockData = createOpeningTime();

  snapshotComponent(<OpeningTimes data={mockData} />);
});

it('adds a bold style rule to the time on the current day', () => {
  const mockData = createOpeningTime();
  const wrapper = mountWithTheme(<OpeningTimes data={mockData} />);

  // Current day will always be Monday due to the mocked dayOfTheWeek function
  expect(wrapper.find(Time).at(0)).toHaveStyleRule('font-weight', 'bold');
});

it('adds a grey style rule for when a day is listed as closed', () => {
  const mockData = createOpeningTime({
    mondayOpeningTimes: 'Closed',
  });
  const wrapper = mountWithTheme(<OpeningTimes data={mockData} />);

  expect(wrapper.find(Time).at(0)).toHaveStyleRule(
    'color',
    theme.palette.grey45
  );
});
