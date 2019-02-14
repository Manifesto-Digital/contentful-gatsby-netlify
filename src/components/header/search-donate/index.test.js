import React from 'react';
import 'jest-styled-components';
import { snapshotComponent } from '../../../../__tests__/helpers/index';
import SearchDonate from './index';

it('Renders correctly', () => {
  snapshotComponent(<SearchDonate resolution="desktop" />);
});
