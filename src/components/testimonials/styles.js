import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10em;

  ${breakpoint.tablet`
    display: flex;
    align-items: center;
    margin-bottom: 0;
  `};
`;

export const ImageContainer = styled.div`
  ${breakpoint.tablet`
    flex-grow: 1;
    flex-basis: 50%;
    order: ${props => props.order};
  `};
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: -75%;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  background-color: ${props =>
    (props.bg === 'Grey' && props.theme.palette.grey10) ||
    (props.bg === 'White' && props.theme.palette.white)};
  padding: 2em;

  ${breakpoint.mobile`
    bottom: -50%;
  `};

  ${breakpoint.mobileLand`
    bottom: -25%;
  `};

  ${breakpoint.tablet`
    position: static;
    flex-grow: 1;
    flex-basis: 50%;
    transform: ${props => props.translate}
  `};
`;

export const Author = styled.span`
  color: ${props => props.theme.palette.primary};
  font-style: italic;
`;
