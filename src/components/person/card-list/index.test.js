import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';
import { createFactory, createPerson } from '../../../utils/test-factories';
import CardList from '.';
import PersonCard from '../card';
import { List, LoadMoreButton } from './styles';
import { sizes, emSize } from '../../theme/breakpoint';

const createCardListProps = createFactory({
  limit: 9,
  list: [
    createPerson({
      id: 'id1',
      firstName: 'mock first name',
      lastName: 'mock last name',
    }),
    createPerson({
      id: 'id2',
      firstName: 'mock first name 2',
      lastName: 'mock last name 2',
    }),
  ],
});

it('renders correctly', () => {
  const mockData = createCardListProps();
  snapshotComponent(<CardList {...mockData} />);
});

it('renders a person for each item', () => {
  const mockData = createCardListProps();
  const wrapper = shallow(<CardList {...mockData} />);
  expect(wrapper.find(PersonCard).length).toEqual(mockData.list.length);
});

it('sets column width depending on prop', () => {
  const mockData = createCardListProps({
    columns: 2,
  });
  const wrapper = mountWithTheme(<CardList {...mockData} />);
  expect(wrapper.find(List)).toHaveStyleRule(
    'grid-template-columns',
    expect.stringContaining(mockData.columns.toString()), // Allow for any gutter size in calc
    {
      media: `(min-width: ${emSize(sizes.desktop)})`,
    }
  );
});

it('will show more person cards if possible', () => {
  const mockData = createCardListProps({
    limit: 1,
  });
  const wrapper = mountWithTheme(<CardList {...mockData} />);

  expect(wrapper.find(PersonCard).length).toEqual(mockData.limit);
  // More should have been loaded
  wrapper.find(LoadMoreButton).simulate('click');
  expect(wrapper.find(PersonCard).length).toBeGreaterThan(mockData.limit);
});
