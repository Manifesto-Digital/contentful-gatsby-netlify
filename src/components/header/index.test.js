import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import { PureHeader } from './index';
import { Open } from './styles';

it('renders correctly', () => {
  snapshotComponent(<PureHeader />);
});

test('Should activate menu on button click', () => {
  const mockCallBack = jest.fn();
  const wrapper = mountWithTheme(<PureHeader />);
  wrapper.find(Open).simulate('click');
  console.log(wrapper.debug());
  expect(mockCallBack.mock.calls.length).toEqual(true);
});
