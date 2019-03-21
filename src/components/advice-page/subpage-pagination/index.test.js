import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createFactory, createSubpage } from '../../../utils/test-factories';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';
import SubPagePagination from '.';
import LinkHandler from '../../link-handler';

const createSubPagePagination = createFactory({
  title: 'An example of a advice guide',
  pages: [
    createSubpage({ slug: 'Advice page 1' }),
    createSubpage({ slug: 'Advice page 2' }),
    createSubpage({ slug: 'Advice page 3' }),
    createSubpage({ slug: 'Advice page 4' }),
  ],
});

it('renders correctly', () => {
  const mockData = createSubPagePagination();
  snapshotComponent(
    <SubPagePagination
      subpages={mockData}
      activeSlug={mockData.pages[2].slug}
    />
  );
});

hidePascalCaseWarning();

it('shows previous and next navigation items if possible', () => {
  const mockData = createSubPagePagination();
  const wrapper = mountWithTheme(
    <SubPagePagination
      subpages={mockData}
      activeSlug={mockData.pages[1].slug}
    />
  );

  expect(wrapper.find(LinkHandler)).toHaveLength(2);
});

it('shows only next if previous not possible', () => {
  const mockData = createSubPagePagination();
  const wrapper = mountWithTheme(
    <SubPagePagination
      subpages={mockData}
      activeSlug={mockData.pages[0].slug}
    />
  );

  expect(wrapper.find(LinkHandler)).toHaveLength(1);
  expect(wrapper.find(LinkHandler).props().type).toEqual('next');
});

it('shows only previous if next not possible', () => {
  const mockData = createSubPagePagination();
  const subpagesLength = mockData.pages.length;
  const wrapper = mountWithTheme(
    <SubPagePagination
      subpages={mockData}
      activeSlug={mockData.pages[subpagesLength - 1].slug}
    />
  );
  expect(wrapper.find(LinkHandler)).toHaveLength(1);
  expect(wrapper.find(LinkHandler).props().type).toEqual('prev');
});
