import React from 'react';
import 'jest-styled-components';
import { snapshotComponent } from 'test-helpers';
import SearchDonate from './index';

it('Renders correctly', () => {
  snapshotComponent(<SearchDonate resolution="desktop" />);
});
