import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from '../../../__tests__/helpers/index';
import PageTitle from '.';
import { H1 } from './styles';

it('renders correctly', () => {
  snapshotComponent(<PageTitle title="Mock title" />);
});

it('displays the correct h1 title', () => {
  const title = 'Mock title';
  const wrapper = shallow(<PageTitle title={title} />);
  expect(wrapper.find(H1).text()).toEqual(title);
});
