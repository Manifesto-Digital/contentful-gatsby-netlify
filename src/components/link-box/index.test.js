import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import LinkBox from './index';
import { ListItem } from './styles';
import { createFactory, createInternalLink } from '../../utils/test-factories';
import { hidePascalCaseWarning } from '../../utils/test-mocks';

export const createLinkBox = createFactory({
  headerText: 'What an amazing banner',
  itemsPerRow: 3,
  links: [
    createInternalLink(),
    createInternalLink(),
    createInternalLink(),
    createInternalLink(),
  ],
});

it('renders correctly', () => {
  const mockData = createLinkBox();

  snapshotComponent(<LinkBox data={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createLinkBox({
    headerText: 'Test header text',
  });
  const wrapper = shallow(<LinkBox data={mockData} />);
  expect(wrapper.find('h2').text()).toBe(mockData.headerText);
});

it('sets the number of links per row', () => {
  const mockData = createLinkBox({ itemsPerRow: 3 });
  const wrapper = shallow(<LinkBox data={mockData} />);
  expect(
    wrapper
      .find(ListItem)
      .at(0)
      .prop('rowCount')
  ).toBe(mockData.itemsPerRow);
});

hidePascalCaseWarning();

it('displays link and title correctly', () => {
  const mockData = createLinkBox({
    link: [
      {
        title: 'Shelter Demo Page',
        slug: 'shelter-demo-page',
      },
    ],
  });
  const wrapper = mountWithTheme(<LinkBox data={mockData} />);

  expect(
    wrapper
      .find(Link)
      .at(0)
      .text()
  ).toBe(mockData.links[0].title);

  expect(
    wrapper
      .find(Link)
      .at(0)
      .prop('to')
  ).toContain(mockData.links[0].slug);
});
