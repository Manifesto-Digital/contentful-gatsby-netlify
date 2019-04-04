import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import Breadcrumbs from '.';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createBreadcrumbs = createFactory({
  parentSlugs: [
    {
      label: 'Legal',
      title: 'Sprint 7 Legal Landing Page',
      slug: 'sprint-7-legal-landing-page',
      menuItem: {
        fields: {
          shortDescription: {
            en_GB:
              'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
          },
        },
      },
    },
    {
      label: 'Legal - option',
      title: 'Sprint 7 Legal Page',
      slug: 'sprint-7-legal-page-demo',
      menuItem: {
        fields: {
          shortDescription: {
            en_GB:
              'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
          },
        },
      },
    },
  ],
  slug: 'identifying_the_nature_of_the_problem',
  currentTitle: 'Legal Page',
});

it('renders correctly', () => {
  const mockBreadcrumbs = createBreadcrumbs();

  snapshotComponent(<Breadcrumbs {...mockBreadcrumbs} />);
});
