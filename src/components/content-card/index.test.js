import React from 'react';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import ContentCard from './index';
import { Card, CardTitle } from './styles';
import { createContentCards } from '../../utils/test-factories';

// Default prop values

export const createContentCard = createContentCards();

it('renders correctly', () => {
  const mockCardData = createContentCard;
  snapshotComponent(<ContentCard data={mockCardData} />);
});

hidePascalCaseWarning();

test('Should display a title correctly', () => {
  const mockCardData = createContentCard;
  const wrapper = mountWithTheme(<ContentCard data={mockCardData} />);
  expect(wrapper.find(CardTitle).text()).toBe(mockCardData.title);
});

test('Should display an image correctly', () => {
  const mockCardData = createContentCard;
  const wrapper = mountWithTheme(<ContentCard data={mockCardData} />);
  expect(wrapper.find('img').prop('src')).toContain(
    mockCardData.pageInformation.pageThumbnail.file.url
  );
});
