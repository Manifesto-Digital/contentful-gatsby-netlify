import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import RichText from './index';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createRichText = createFactory({
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'Rich text',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
  },
});

it('renders correctly', () => {
  const mockData = createRichText();
  snapshotComponent(<RichText richText={mockData} />);
});
