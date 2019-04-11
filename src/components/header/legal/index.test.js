import React from 'react';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createHeaderNavigation } from '../../../utils/test-factories';
import { PureLegalHeader } from '.';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';
import { resizeWindow } from '../../../utils/test-window-resize';
import { Overlay } from '../../styled/overlay';
import { MobileMenuOpen } from '../styles';
import { Wrapper } from '../navigation/styles';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<PureLegalHeader pageData={mockData} />);
});

hidePascalCaseWarning();

it('Displays burger icon on mobile devices', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureLegalHeader pageData={mockData} />);

  resizeWindow(760, 1024);

  expect(wrapper.find(MobileMenuOpen)).toHaveLength(1);
  expect(wrapper.find(MobileMenuOpen)).toHaveStyleRule('display', 'flex');
});

test('Should activate menu and display an overlay on button click', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureLegalHeader pageData={mockData} />);

  act(() => {
    wrapper.find(MobileMenuOpen).simulate('click');
  });
  wrapper.update();
  expect(wrapper.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
  expect(wrapper.find(Overlay)).toHaveStyleRule('opacity', '1');
});
