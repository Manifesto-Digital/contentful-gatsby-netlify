import { snapshotComponent } from 'test-helpers';
import React from 'react';
import TableOfContent from '.';
import {
  createChildContentfulRichText,
  createFactory,
} from '../../utils/test-factories';

export const createTableOfContents = createFactory({
  tableOfContents: [
    {
      textContent: createChildContentfulRichText(),
      title: 'Public Order Act 1986',
    },
    {
      textContent: createChildContentfulRichText(),
      title: 'Police and Criminal Evidence Act 1984',
    },
  ],
});

it('renders correctly', () => {
  const mockData = createTableOfContents();
  snapshotComponent(<TableOfContent {...mockData} />);
});
