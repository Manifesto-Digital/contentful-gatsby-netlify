import React from 'react';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createHeaderNavigation } from '../../utils/test-factories';
import { PureHeader } from './index';
import { Overlay } from '../styled/overlay';
import { MobileMenuOpen } from './styles';
import { Wrapper } from './navigation/styles';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import { sizes, emSize } from '../theme/breakpoint';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<PureHeader pageData={mockData} />);
});

hidePascalCaseWarning();

it('Displays burger icon on mobile devices', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureHeader pageData={mockData} />);

  expect(wrapper.find(MobileMenuOpen).at(1)).toHaveLength(1);

  const hamburger = wrapper.find(MobileMenuOpen).at(0);

  // Hidden on mobile showing on desktop
  expect(hamburger).toHaveStyleRule('display', 'flex');
  expect(hamburger).toHaveStyleRule('display', 'none', {
    media: `(min-width: ${emSize(sizes.desktop)})`,
  });
});

test('Should activate menu and display an overlay on button click', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureHeader pageData={mockData} />);
  const mockButton = wrapper.find(MobileMenuOpen).at(1);

  mockButton.simulate('click');

  expect(wrapper.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
  expect(wrapper.find(Overlay)).toHaveStyleRule('opacity', '1');
});
