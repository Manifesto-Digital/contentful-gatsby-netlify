import React from 'react';
import { snapshotComponent } from 'test-helpers';
import { createFactory } from '../../utils/test-factories';
import { legalHierarchy } from '../../utils/test-legal';
import LegalSideBar from '.';

export const createLegalSideBar = createFactory({
  hierarchy: legalHierarchy,
  parentSlug: [
    {
      slug: 'legal',
      key: '0',
      label: 'Legal',
    },
    {
      slug: 'harassment_and_antisocial_behaviour',
      key: '1',
      label: 'Harassment and antisocial behaviour',
    },
  ],
  slug: 'mock-slug',
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
