import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers/index';

import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories';
import InlineCallOut from './index';
import RichText from '../rich-text';

// Default props
export const createInlineBanner = createFactory({
  content: createChildContentfulRichText(),
  icon: 'map-unfolded',
  borderColour: null,
  bannerColour: null,
});

it('renders correctly with no options chosen in cms', () => {
  const mockData = createInlineBanner();
  snapshotComponent(
    <InlineCallOut>
      <RichText richText={mockData.content} />
    </InlineCallOut>
  );
});

it('renders correctly with icon chosen in cms', () => {
  const mockData = createInlineBanner({
    icon: 'Open book',
  });

  snapshotComponent(
    <InlineCallOut icon={mockData.icon}>
      <RichText richText={mockData.content} />
    </InlineCallOut>
  );
});
