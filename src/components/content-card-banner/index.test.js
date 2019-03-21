import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import ContentCardBanner from './index';
import { BannerBackground, CardRow } from './styles';
import { createContentCardBanner } from '../../utils/test-factories';
import theme from '../theme/variables';

// Default prop values
it('renders correctly', () => {
  const mockBanner = createContentCardBanner();
  snapshotComponent(<ContentCardBanner data={mockBanner} />);
});

hidePascalCaseWarning();

it('Shows a background colour correctly', () => {
  const mockBanner = createContentCardBanner({ bannerColor: 'Grey' });
  const wrapper = mountWithTheme(<ContentCardBanner data={mockBanner} />);

  expect(wrapper.find(BannerBackground)).toHaveStyleRule(
    'background',
    theme.palette.grey10
  );
});

test('Should pass the correct item count', () => {
  const mockCardData = createContentCardBanner();
  const wrapper = mountWithTheme(<ContentCardBanner data={mockCardData} />);
  expect(wrapper.find(CardRow).props().items).toEqual(2);
});
