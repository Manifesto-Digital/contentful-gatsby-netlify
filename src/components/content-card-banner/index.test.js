import React from 'react';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import ContentCardBanner from './index';
import { BannerBackground, CardRow } from './styles';
import { createContentCardBanner } from '../../utils/test-factories';

// Default prop values

it('renders correctly', () => {
  const mockBanner = createContentCardBanner();
  snapshotComponent(<ContentCardBanner data={mockBanner} />);
});

hidePascalCaseWarning();

it('Shows a background colour correctly', () => {
  const mockBanner = createContentCardBanner({ bannerColor: 'grey' });
  const wrapper = mountWithTheme(<ContentCardBanner data={mockBanner} />);
  expect(wrapper.find(BannerBackground).props().bannerColour).toEqual(
    mockBanner.bannerColour
  );
  expect(wrapper.find(BannerBackground)).toHaveStyleRule(
    'background',
    '#e5e5e5'
  );
});

it('Passes an orientation', () => {
  const mockBanner = createContentCardBanner({ bannerFlow: 'horizontal' });
  const wrapper = mountWithTheme(<ContentCardBanner data={mockBanner} />);
  expect(wrapper.find(BannerBackground).props().bannerFlow).toEqual(
    mockBanner.bannerFlow
  );
});

test('Should pass the correct item count', () => {
  const mockCardData = createContentCardBanner();
  const wrapper = mountWithTheme(<ContentCardBanner data={mockCardData} />);
  expect(wrapper.find(CardRow).props().items).toEqual(2);
});
