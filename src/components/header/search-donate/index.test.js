import React from 'react';
import 'jest-styled-components';
import { snapshotComponent } from '../../../../__tests__/helpers/index';
import SearchDonate from './index';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';

it('Renders correctly', () => {
  snapshotComponent(<SearchDonate resolution="desktop" />);
});

hidePascalCaseWarning();
