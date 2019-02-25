import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.large} 0;
  background-color: ${props => props.theme.palette.grey10};
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const Content = styled.div`
  text-align: center;
  margin: 0 auto;

  ${breakpoint.tablet`
    max-width: 66.666%
  `};

  & > p:last-of-type {
    margin-bottom: 0;
  }
`;

export const Red = styled.span`
  color: ${props => props.theme.palette.primary};
`;
