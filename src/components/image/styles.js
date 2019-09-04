import styled from 'styled-components';
import ResponsiveImage from './responsive';

export const Wrapper = styled(ResponsiveImage)`
  width: ${({ noStretch }) => !noStretch && '100%'};
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? 0 : theme.spacing.large};
`;
