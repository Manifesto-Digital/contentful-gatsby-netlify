import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createFactory } from '../../utils/test-factories';
import ContactCard from './index';
import { Card } from './styles';

export const createContactCard = createFactory({
  contactNumber1: '01234567890',
  contactNumber1Text: 'Contact number 1',
  contactNumber2: '09876543210',
  contactNumber2Text: 'Contact number 2',
});

it('renders correctly', () => {
  const mockData = createContactCard();

  snapshotComponent(<ContactCard data={mockData} />);
});

it('only renders one card if no 2nd contact number is provided', () => {
  const mockData = createContactCard({
    contactNumber1: '00000000000',
    contactNumber1Text: 'Test contact number text',
    contactNumber2: null,
    contactNumber2Text: null,
  });

  const wrapper = mountWithTheme(<ContactCard data={mockData} />);

  expect(wrapper.find(Card).length).toEqual(1);
});

it('renders two cards if the 2nd contact number is provided', () => {
  const mockData = createContactCard({
    contactNumber1: '00000000000',
    contactNumber1Text: 'Test contact number text',
    contactNumber2: '11111111111',
    contactNumber2Text: 'Test contact number text 2',
  });

  const wrapper = mountWithTheme(<ContactCard data={mockData} />);

  expect(wrapper.find(Card).length).toEqual(2);
});
