import React from 'react';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import { createFactory } from '../../utils/test-factories';
import SubPageList from './subpage-list';

// Default props
const subPageItem = createFactory({
  slug: 'legal-2',
  label: 'Legal 2 page',
  children: null,
  description:
    'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
});

export const subPageList = createFactory({
  items: [
    subPageItem({ slug: 'legal-1', label: 'legal 1' }),
    subPageItem({ slug: 'legal-2', label: 'legal 2' }),
  ],
});

it('renders correctly', () => {
  const mockData = subPageList();
  snapshotComponent(<SubPageList {...mockData} />);
});

hidePascalCaseWarning();

it('shows a list of items with links', () => {
  const mockData = subPageList();
  const wrapper = mountWithTheme(<SubPageList {...mockData} />);
  expect(wrapper.find('li').length).toEqual(mockData.items.length);
  expect(wrapper.find(Link).length).toEqual(mockData.items.length);

  wrapper.find('li').forEach((listItem, i) => {
    expect(listItem.text()).toContain(mockData.items[i].label);
    expect(listItem.text()).toContain(mockData.items[i].description);
  });

  wrapper.find(Link).forEach((link, i) => {
    expect(link.prop('to')).toContain(mockData.items[i].slug);
  });
});
