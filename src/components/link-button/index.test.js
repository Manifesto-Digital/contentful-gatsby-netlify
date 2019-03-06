import React from 'react';
import LinkButton from '.';
import { snapshotComponent } from 'test-helpers';

it('renders correctly', () => {
  snapshotComponent(<LinkButton>Foo</LinkButton>);
});
