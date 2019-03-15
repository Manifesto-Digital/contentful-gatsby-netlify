import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import PageTitle from '.';

it('renders correctly', () => {
  snapshotComponent(
    <PageTitle>
      <h1>Mock Title</h1>
    </PageTitle>
  );
});

it('renders the children correctly', () => {
  const title = 'Mock title';
  const wrapper = shallow(
    <PageTitle>
      <h1>{title}</h1>
    </PageTitle>
  );
  expect(wrapper.find('h1').text()).toEqual(title);
});
