import React from 'react';
import 'jest-styled-components';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import { createHeaderNavigation } from '../../utils/test-factories';
import { resizeWindow } from '../../utils/test-window-resize';
import { PureHeader } from './index';
import { Overlay } from '../styled/overlay';
import { Open } from './styles';
import { Wrapper } from './navigation/styles';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<PureHeader pageData={mockData} />);
});

it('Displays burger icon on mobile devices', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureHeader pageData={mockData} />);

  resizeWindow(760, 1024);
  expect(wrapper.find(Open)).toHaveLength(1);
  expect(wrapper.find(Open)).toHaveStyleRule('display', 'flex');
});

test('Should activate menu and display an overlay on button click', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<PureHeader pageData={mockData} />);
  const mockButton = wrapper.find(Open);

  mockButton.simulate('click');

  expect(wrapper.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
  expect(wrapper.find(Overlay)).toHaveStyleRule('opacity', '1');
});
