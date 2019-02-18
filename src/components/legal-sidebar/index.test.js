import React from 'react';
import { Link } from 'gatsby';
import {
  mountWithTheme,
  snapshotComponent,
} from '../../../__tests__/helpers/index';
import { createFactory } from '../../utils/test-factories';
import LegalSideBar from './index';

export const createLegalSideBar = createFactory({
  sideBarLinks: [{ title: 'Legal sidebar link', slug: 'legal-page' }],
});

it('renders correctly', () => {
  const mockData = createLegalSideBar();

  snapshotComponent(<LegalSideBar data={mockData} />);
});

it('renders the correct information', () => {
  const mockData = createLegalSideBar({
    sideBarLinks: [{ title: 'test link name', slug: 'test-slug' }],
  });

  const wrapper = mountWithTheme(<LegalSideBar data={mockData} />);

  expect(wrapper.find(Link).text()).toEqual('test link name');
  expect(wrapper.find(Link).prop('to')).toContain('test-slug');
});

it('renders multiple links correctly', () => {
  const mockData = createLegalSideBar({
    sideBarLinks: [
      { title: 'test link 1', slug: 'test-slug-1' },
      { title: 'test link 2', slug: 'test-slug-2' },
    ],
  });

  const wrapper = mountWithTheme(<LegalSideBar data={mockData} />);

  expect(
    wrapper
      .find(Link)
      .at(0)
      .prop('to')
  ).toContain('test-slug-1');
  expect(
    wrapper
      .find(Link)
      .at(1)
      .prop('to')
  ).toContain('test-slug-2');
});
