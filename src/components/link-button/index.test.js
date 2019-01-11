import React from 'react';
import LinkButton from '.';
import { snapshotComponent } from '../../../__tests__/helpers';

it('renders correctly', () => {
  snapshotComponent(<LinkButton>Foo</LinkButton>);
});
