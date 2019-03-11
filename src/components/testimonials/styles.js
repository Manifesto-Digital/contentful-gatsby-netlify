import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const ModuleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  ${breakpoint.tablet`
    margin-bottom: 0;
    display: flex;
    align-items: center;
  `};
`;

export const ImageWrapper = styled.div`
  ${breakpoint.tablet`
    flex-grow: 1;
    flex-basis: 50%;
    order: ${({ loopIndex }) => (loopIndex % 2 === 0 ? 0 : 2)};
  `};
`;

export const TextWrapper = styled.div`
  position: relative;
  width: 90%;
  background-color: ${({ bg, theme }) =>
    (bg === 'Grey' && theme.palette.grey10) ||
    (bg === 'White' && theme.palette.white)};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: -${({ theme }) => theme.spacing.medium} auto 0;

  ${breakpoint.tablet`
    flex-grow: 1;
    flex-basis: 50%;
    margin: 0;
    margin-left: ${({ loopIndex, theme }) =>
      loopIndex % 2 === 0 ? `-${theme.spacing.medium}` : theme.spacing.medium};
    margin-right: ${({ loopIndex, theme }) =>
      loopIndex % 2 === 0 ? theme.spacing.medium : `-${theme.spacing.medium}`};
  `};
`;

export const Author = styled.span`
  color: ${({ theme }) => theme.palette.primary};
  font-style: italic;
`;
