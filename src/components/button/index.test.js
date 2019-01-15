import React from 'react';
import Download from './../../assets/svg/icons/download-light.svg';
import { snapshotComponent } from '../../../__tests__/helpers';
import Button from '.';

it('renders correctly', () => {
  snapshotComponent(<Button bg="donate" />);
});

it('renders correctly when full width', () => {
  snapshotComponent(<Button bg="donate" fullWidth />);
});

it('renders correctly with an icon', () => {
  snapshotComponent(
    <Button bg="blue" icon={Download}>
      text here
    </Button>
  );
});
