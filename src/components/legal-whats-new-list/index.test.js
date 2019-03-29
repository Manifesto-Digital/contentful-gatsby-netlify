import React from 'react';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import LinkList from '.';
import { hidePascalCaseWarning } from '../../utils/test-mocks';

const mockData = {
  featuredItem: {
    title: 'Featured legal page',
    slug: 'featured-legal-page',
    lastAmended: '2019-03-26T00:00+00:00',
    pageInformation: {
      shortDescription: {
        shortDescription:
          'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
      },
    },
  },
  items: [
    {
      title: 'Legal Page 1',
      slug: 'legal-page-1',
      lastAmended: '2019-03-26T00:00+00:00',
      pageInformation: {
        shortDescription: {
          shortDescription:
            'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
        },
      },
    },
    {
      title: 'Legal page 2',
      slug: 'legal-page-2',
      lastAmended: '2019-03-25T00:00+00:00',
      pageInformation: {
        shortDescription: {
          shortDescription:
            'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
        },
      },
    },
  ],
};

it('renders correctly', () => {
  snapshotComponent(<LinkList {...mockData} />);
});

hidePascalCaseWarning();

it('renders a the featured item and the array of items with links', () => {
  const wrapper = mountWithTheme(<LinkList {...mockData} />);

  const items = [mockData.featuredItem, ...mockData.items];

  expect(wrapper.find('li').length).toEqual(items.length);

  wrapper.find(Link).forEach((link, i) => {
    expect(link.prop('to')).toContain(items[i].slug);
  });
});
