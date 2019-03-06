import React from 'react';
import { snapshotComponent } from 'test-helpers';
import Recaptcha from '.';

it('renders correctly', () => {
  snapshotComponent(<Recaptcha />);
});
