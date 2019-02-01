import styled from 'styled-components';
import RichText from '../rich-text';
import { Container } from '../styled/containers';

export const OuterContainer = styled.div`
  background: ${props =>
    (props.colour === 'White' && props.theme.palette.white) ||
    (props.colour === 'Black' && props.theme.palette.black) ||
    (props.colour === 'Grey' && props.theme.palette.grey10) ||
    props.theme.palette.white};
`;

export const Row = styled(Container)`
  padding: 2em 0;

  background: ${props =>
    (props.colour === 'White' && props.theme.palette.white) ||
    (props.colour === 'Black' && props.theme.palette.black) ||
    (props.colour === 'Grey' && props.theme.palette.grey10) ||
    props.theme.palette.white};
`;

export const HeaderText = styled.h2`
  color: ${props =>
    (props.colour === 'Black' && props.theme.palette.white) ||
    props.theme.palette.black};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// TODO: This style might have to pull out and go into the "containers.js" file
export const ContentSemi = styled.div`
  flex: 0.5;
  align-self: flex-start;

  &:nth-child(2n) {
    flex: 0.4;
    align-self: center;
  }
`;

export const TextWrapper = styled(RichText)`
  color: ${props =>
    (props.colour === 'Black' && props.theme.palette.white) ||
    props.theme.palette.black};
`;
