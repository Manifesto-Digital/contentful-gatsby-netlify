import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import RelatedAdvice from './index';
import { Title, ListItem } from './styles';
import { createFactory, createInternalLink } from '../../utils/test-factories';

export const createRelatedAdvice = createFactory({
  headerText: 'What an amazing banner',
  itemsPerRow: 3,
  links: [createInternalLink(), createInternalLink(), createInternalLink()],
});

it('renders correctly', () => {
  const mockData = createRelatedAdvice();

  snapshotComponent(<RelatedAdvice data={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createRelatedAdvice({
    headerText: 'Test header text',
  });
  const wrapper = shallow(<RelatedAdvice data={mockData} />);
  expect(wrapper.find(Title).text()).toBe(mockData.headerText);
});

it('sets the number of links per row', () => {
  const mockData = createRelatedAdvice({ itemsPerRow: 3 });
  const wrapper = shallow(<RelatedAdvice data={mockData} />);
  expect(
    wrapper
      .find(ListItem)
      .at(0)
      .prop('rowCount')
  ).toBe(mockData.itemsPerRow);
});

it('displays link and title correctly', () => {
  const mockData = createRelatedAdvice({
    link: [
      {
        title: 'Shelter Demo Page',
        slug: 'shelter-demo-page',
      },
    ],
  });
  const wrapper = shallow(<RelatedAdvice data={mockData} />);

  expect(
    wrapper
      .find(ListItem)
      .at(0)
      .text()
  ).toBe(mockData.links[0].title);

  expect(
    wrapper
      .find(ListItem)
      .at(0)
      .prop('href')
  ).toBe(mockData.links[0].slug);
});
