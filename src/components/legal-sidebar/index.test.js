import React from 'react';
import { snapshotComponent } from 'test-helpers';
import { createFactory } from '../../utils/test-factories';
import { legalSidebarActivePageHierarchy } from '../../utils/test-legal';
import LegalSideBar from '.';

export const createLegalSideBar = createFactory({
  hierarchy: legalSidebarActivePageHierarchy,
  slug: 'mock-slug',
  heading: 'Legal',
});

it('renders correctly', () => {
  const mockData = createLegalSideBar();
  snapshotComponent(<LegalSideBar {...mockData} />);
});

// TODO: Once full slug can be added to the parentSlug array
// TODO: Also check that active page has an active prop
// it('passes an activeParent prop to the parent link items', () => {
//   const mockData = createLegalSideBar();
//   const wrapper = mountWithTheme(<LegalSideBar {...mockData} />);

//   mockData.parentSlug.forEach(parentItem => {
//     expect(
//       wrapper.findWhere(node => node.props().href === '/')
//     ).toBeTrue();
//   });
// });
