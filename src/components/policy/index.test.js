import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import {
  createFactory,
  createChildContentfulRichText,
  createFile,
} from '../../utils/test-factories';
import Policy from './index';
import { Detail } from './styles';
import { dateAsString } from '../../utils/dates';

export const createPolicy = createFactory({
  policyName: 'My very cool policy',
  author: 'Owen Jones',
  publishDate: '2019-02-19',
  displayDate: 'February 2019',
  summary: createChildContentfulRichText(),
  media: [createFile()],
});

it('renders correctly', () => {
  const mockData = createPolicy();

  snapshotComponent(<Policy data={mockData} />);
});

it('displays the default date if no display date is provided', () => {
  const mockData = createPolicy({
    publishDate: '2020-01-01',
    displayDate: '',
  });

  const wrapper = mountWithTheme(<Policy data={mockData} />);

  expect(
    wrapper
      .find(Detail)
      .at(1)
      .text()
  ).toContain(dateAsString(mockData.publishDate, 'DD/MM/YYYY'));
});
