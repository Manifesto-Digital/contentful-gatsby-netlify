import React from 'react';
import {
  snapshotComponent,
  renderWithTheme,
} from '../../../__tests__/helpers/index';
import theme from '../theme/variables';

import PaddedBox from '.';

it('renders correctly with defaults', () => {
  snapshotComponent(<PaddedBox />);
});

it('changes based on supplied props', () => {
  const wrapper = renderWithTheme(
    <PaddedBox bg="grey45" padding="large" removeMarginBottom />
  );
  expect(wrapper.toJSON()).toHaveStyleRule('padding', theme.spacing.large);
  expect(wrapper.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.grey45
  );
  expect(wrapper.toJSON()).toHaveStyleRule('margin-bottom', '0');

  const wrapper2 = renderWithTheme(
    <PaddedBox bg="sanMarinoBlue" padding="small" />
  );

  expect(wrapper2.toJSON()).toHaveStyleRule('padding', theme.spacing.small);
  expect(wrapper2.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.sanMarinoBlue
  );
});

it('it renders with shadow when supplied', () => {
  const wrapper = renderWithTheme(<PaddedBox shadow />);
  expect(wrapper.toJSON()).toHaveStyleRule('box-shadow', theme.boxshadow.small);
  expect(wrapper.toJSON()).toHaveStyleRule(
    'border-radius',
    theme.borderradius.small
  );
});
