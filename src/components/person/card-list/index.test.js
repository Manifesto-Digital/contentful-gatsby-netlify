import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import { createFactory, createPerson } from '../../../utils/test-factories';
import CardList from '.';
import PersonCard from '../card';

const createCardListProps = createFactory({
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
