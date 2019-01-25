import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';
import { createFactory, createSubpage } from '../../../utils/test-factories';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';
import SubpageMenu from '.';
import MenuItem from './menu-item';
import LinkHandler from '../../link-handler';

const createSubpageMenu = createFactory({
  title: 'An example of a advice guide',
  pages: [
    createSubpage({ slug: 'Advice page 1' }),
    createSubpage({ slug: 'Advice page 2' }),
    createSubpage({ slug: 'Advice page 3' }),
    createSubpage({ slug: 'Advice page 4' }),
  ],
});

it('renders correctly', () => {
  const mockData = createSubpageMenu();
  snapshotComponent(
    <SubpageMenu subpages={mockData} activeSlug={mockData.pages[2].slug} />
  );
});

hidePascalCaseWarning();

it('renders the a list of menu items', () => {
  const mockData = createSubpageMenu();

  const wrapper = mountWithTheme(
    <SubpageMenu subpages={mockData} activeSlug={mockData.pages[1].slug} />
  );

  const subpageLength = mockData.pages.length;
  expect(wrapper.find(MenuItem)).toHaveLength(subpageLength);
  expect(wrapper.find('li')).toHaveLength(subpageLength);
});

it('renders an ol', () => {
  const mockData = createSubpageMenu();
  const wrapper = mountWithTheme(
    <SubpageMenu subpages={mockData} activeSlug={mockData.pages[1].slug} />
  );
  expect(wrapper.find('ol').length).toBeGreaterThan(0);
});

it('renders links for other subpages and text for the active subpage', () => {
  const mockData = createSubpageMenu();
  const wrapper = mountWithTheme(
    <SubpageMenu subpages={mockData} activeSlug={mockData.pages[1].slug} />
  );
  const subpageLength = mockData.pages.length;

  expect(wrapper.find(LinkHandler)).toHaveLength(subpageLength - 1); // The active page will not be a link
});
