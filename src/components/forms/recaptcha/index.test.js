import React from 'react';
import Recaptcha from '.';
import { snapshotComponent } from '../../../../__tests__/helpers';

it('renders correctly', () => {
  snapshotComponent(<Recaptcha />);
});
