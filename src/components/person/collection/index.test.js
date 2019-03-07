import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';

import { createFactory, createPerson } from '../../../utils/test-factories';
import { PurePersonCollection } from '.';

const CreatePersonCollection = createFactory({
  people: [createPerson(), createPerson()],
  data: {
    headerText: 'mock header text',
  },
});

it('renders correctly', () => {
  const mockData = CreatePersonCollection();
  snapshotComponent(<PurePersonCollection {...mockData} />);
});

it('renders the header text', () => {
  const mockData = CreatePersonCollection({
    data: { headerText: 'New mock header' },
  });

  const wrapper = mountWithTheme(<PurePersonCollection {...mockData} />);
  expect(wrapper.find('h2').text()).toEqual(mockData.data.headerText);
});
