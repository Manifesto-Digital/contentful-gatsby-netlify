import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../../utils/test-factories';
import ThreeColumn from '.';
// import { Heading } from './styles';

// Default props
export const createThreeColumnInfo = createFactory({
  yesList: [
    'Beds',
    'Cabinets',
    'Lights',
    ' Electrical items',
    'Wardrobes',
    'Sofas',
    ' Tables and more',
  ],
  noList: [
    'Washing machines',
    'Dishwashers',
    'Electrical items containing water',
    'Upholstered items without a fire label',
  ],

  donationHelpText: createChildContentfulRichText(),
});

it('renders correctly', () => {
  const mockData = createThreeColumnInfo();
  snapshotComponent(<ThreeColumn {...mockData} />);
});

it('renders both the yes and no lists', () => {
  const mockData = createThreeColumnInfo();
  const wrapper = mountWithTheme(<ThreeColumn {...mockData} />);

  const yesList = () => wrapper.find('ul').at(0);
  expect(yesList().find('li').length).toEqual(mockData.yesList.length);

  mockData.yesList.forEach(item => {
    expect(yesList().text()).toContain(item);
  });

  const noList = () => wrapper.find('ul').at(1);
  expect(noList().find('li').length).toEqual(mockData.noList.length);
  mockData.yesList.forEach(item => {
    expect(yesList().text()).toContain(item);
  });
});
