import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';
import Stats from '.';
import SingleStat from './single-stat';

// Default props
const createStat = (i, title, subtitle, text) => ({
  [`stat${i}Title`]: title,
  [`stat${i}Subtitle`]: subtitle,
  [`stat${i}Text`]: text,
});
export const createStats = createFactory({
  displayType: 'Grid',
  ...createStat(1, 'stat 1 title', 'subtitle', createChildContentfulRichText()),
  ...createStat(2, 'stat 2 title', 'subtitle', createChildContentfulRichText()),
  ...createStat(3, 'stat 3 title', 'subtitle', createChildContentfulRichText()),
  ...createStat(4, 'stat 4 title', 'subtitle', createChildContentfulRichText()),
});

it('renders correctly', () => {
  const mockData = createStats();
  snapshotComponent(<Stats data={mockData} />);
});

it('shows all 4 stats if grid is chosen', () => {
  const mockData = createStats({
    displayType: 'Grid',
  });

  const wrapper = shallow(<Stats data={mockData} />);
  expect(wrapper.find(SingleStat).length).toEqual(4);
});

it('shows 3 stats if line is chosen', () => {
  const mockData = createStats({
    displayType: 'Line',
  });

  const wrapper = shallow(<Stats data={mockData} />);
  expect(wrapper.find(SingleStat).length).toEqual(3);
});

it('renders the title and subtitle as h2s', () => {
  const mockData = createStats({
    displayType: 'Grid',
    ...createStat(1, '1 title', 'subtitle', createChildContentfulRichText()),
    ...createStat(2, '2 title', 'subtitle', createChildContentfulRichText()),
    ...createStat(3, '3 title', 'subtitle', createChildContentfulRichText()),
    ...createStat(4, '4 title', 'subtitle', createChildContentfulRichText()),
  });

  const wrapper = mountWithTheme(<Stats data={mockData} />);
  wrapper.find('h2').forEach((header, i) => {
    expect(header.text()).toContain(`${i + 1} title subtitle`);
  });
});
