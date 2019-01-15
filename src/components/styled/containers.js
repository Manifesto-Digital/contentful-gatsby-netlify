import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};
`;

export const TwoThirds = styled.div`
  max-width: 100%;

  ${breakpoint.tablet`
    max-width: 66%;
  `}
`;
