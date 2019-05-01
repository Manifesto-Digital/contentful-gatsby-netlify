import React from 'react';
import { snapshotComponent } from 'test-helpers';
import Breadcrumbs from '.';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createBreadcrumbs = createFactory({
  parentPages: [
    {
      menuItem: [
        {
          slug: 'shelter-legal',
          title: 'Shelter Legal',
        },
      ],
    },
  ],

  slug: 'identifying_the_nature_of_the_problem',
  currentTitle: 'Legal Page',
});

it('renders correctly', () => {
  const mockBreadcrumbs = createBreadcrumbs();

  snapshotComponent(<Breadcrumbs {...mockBreadcrumbs} />);
});
