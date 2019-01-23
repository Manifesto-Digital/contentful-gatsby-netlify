import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};
`;

export const TwoThirds = styled.div`
  max-width: 100%;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};

  ${breakpoint.tablet`
    max-width: 66%;
  `}
`;

export const ContentWithSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoint.tablet`
    flex-direction: row;
  `}
`;

export const SideBar = styled.div`
  max-width: 100%;
  margin-top: ${props => props.theme.spacing.standard};

  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};

  ${breakpoint.tablet`
    max-width: 32%;
    margin-top: 0;
  `}
`;
