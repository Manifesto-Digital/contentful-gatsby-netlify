import React from 'react';
import { snapshotComponent } from 'test-helpers';
import LinkButton from '.';

it('renders correctly', () => {
  snapshotComponent(<LinkButton>Foo</LinkButton>);
});
