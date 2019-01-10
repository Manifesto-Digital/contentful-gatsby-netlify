import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';

import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';
import InlineCallOut from './index';

// Default props
export const createInlineBanner = createFactory({
  content: createChildContentfulRichText(),
  icon: null,
  borderColour: null,
  bannerColour: null,
});

it('renders correctly with no options chosen in cms', () => {
  const mockData = createInlineBanner();
  snapshotComponent(<InlineCallOut content={mockData} />);
});

it('renders correctly with icon chosen in cms', () => {
  const mockData = createInlineBanner({
    icon: 'Open book',
  });

  snapshotComponent(<InlineCallOut content={mockData} />);
});
