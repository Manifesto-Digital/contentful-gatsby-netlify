import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import ContentCard from './index';
import { CardTitle } from './styles';
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
