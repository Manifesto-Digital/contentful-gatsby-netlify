import React from 'react';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createHeaderNavigation } from '../../../utils/test-factories';
import { PureLegalHeader } from '.';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';
import { Overlay } from '../../styled/overlay';
import { MobileMenuOpen, BurgerIcon } from '../styles';
import { Wrapper } from '../navigation/styles';
import { sizes, emSize } from '../../theme/breakpoint';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<PureLegalHeader pageData={mockData} />);
});

hidePascalCaseWarning();

it('Displays burger icon on mobile devices', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureLegalHeader pageData={mockData} />);

  expect(wrapper.find(BurgerIcon)).toHaveLength(1);

  const hamburger = wrapper.find(MobileMenuOpen).at(0);

  // Hidden on mobile showing on desktop
  expect(hamburger).toHaveStyleRule('display', 'flex');
  expect(hamburger).toHaveStyleRule('display', 'none', {
    media: `(min-width: ${emSize(sizes.desktop)})`,
  });
});

test('Should activate menu and display an overlay on button click', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureLegalHeader pageData={mockData} />);

  act(() => {
    wrapper
      .find(MobileMenuOpen)
      .at(0)
      .simulate('click'); // hamburger
  });
  wrapper.update();
  expect(wrapper.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
  expect(wrapper.find(Overlay)).toHaveStyleRule('opacity', '1');
});
