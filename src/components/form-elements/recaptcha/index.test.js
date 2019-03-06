import React from 'react';
import Recaptcha from '.';
import { snapshotComponent } from 'test-helpers';

it('renders correctly', () => {
  snapshotComponent(<Recaptcha />);
});
