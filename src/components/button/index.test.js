import React from 'react';
import { snapshotComponent } from '../../../__tests__/helpers';
import Button from '.';

it('renders correctly', () => {
  snapshotComponent(<Button bg="donate" />);
});

it('renders correctly when full width', () => {
  snapshotComponent(<Button bg="donate" fullWidth />);
});
