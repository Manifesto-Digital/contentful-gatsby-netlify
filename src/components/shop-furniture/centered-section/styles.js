import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.palette.grey10};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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
  color: ${({ theme }) => theme.palette.primary};
`;
