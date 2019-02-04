import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  margin-bottom: 2em;

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
  background-color: ${props =>
    (props.bg === 'Grey' && props.theme.palette.grey10) ||
    (props.bg === 'White' && props.theme.palette.white)};
  padding: 2em;
  margin: -2em auto 0;

  ${breakpoint.tablet`
    flex-grow: 1;
    flex-basis: 50%;
    margin: 0;
    margin-left: ${({ loopIndex }) => (loopIndex % 2 === 0 ? '-2em' : '2em')};
    margin-right: ${({ loopIndex }) => (loopIndex % 2 === 0 ? '2em' : '-2em')};
  `};
`;

export const Author = styled.span`
  color: ${props => props.theme.palette.primary};
  font-style: italic;
`;
