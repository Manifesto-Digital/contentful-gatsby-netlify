import React from 'react';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createFactory } from '../../utils/test-factories';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import Pagination from '.';
import LinkHandler from '../link-handler';

const createPagination = createFactory({
  pageContext: {
    currentPage: 1,
    numPages: 10,
  },
  slug: 'test-slug',
});

it('renders correctly', () => {
  const mockData = createPagination();
  snapshotComponent(<Pagination {...mockData} />);
});

hidePascalCaseWarning();

it('renders the pagination links', () => {
  const mockData = createPagination({
    pageContext: {
      currentPage: 1,
      numPages: 10,
    },
  });
  const wrapper = mountWithTheme(<Pagination {...mockData} />);
  expect(wrapper.find(Link).length).toBeGreaterThan(3);
});

it('shows diabled state if previous pagination is not available', () => {
  const mockData = createPagination({
    pageContext: {
      currentPage: 1,
      numPages: 10,
    },
  });
  const wrapper = mountWithTheme(<Pagination {...mockData} />);

  expect(
    wrapper
      .find({ previous: true })
      .find(LinkHandler)
      .prop('disabled')
  ).toBeTruthy();
});

it('shows diabled state if next pagination is not available', () => {
  const mockData = createPagination({
    pageContext: {
      currentPage: 10,
      numPages: 10,
    },
  });
  const wrapper = mountWithTheme(<Pagination {...mockData} />);

  expect(
    wrapper
      .find({ next: true })
      .find(LinkHandler)
      .prop('disabled')
  ).toBeTruthy();
});

it("doesn't generate a link of that includes '/0' or '/1'", () => {
  const mockData = createPagination({
    slug: 'test-slug',
  });
  const wrapper = mountWithTheme(<Pagination {...mockData} />);
  const stringsToCheck = ['/0', '/1'];
  wrapper.find(Link).forEach(node => {
    expect(
      stringsToCheck.some(string => node.prop('to').includes(string))
    ).toBeFalsy();
  });
});
