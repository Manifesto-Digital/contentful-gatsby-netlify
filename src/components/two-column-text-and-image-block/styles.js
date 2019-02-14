import styled from 'styled-components';
import RichText from '../rich-text';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.large} 0;

  background-color: ${props =>
    (props.backgroundColour === 'white' && props.theme.palette.white) ||
    (props.backgroundColour === 'black' && props.theme.palette.black) ||
    (props.backgroundColour === 'grey' && props.theme.palette.grey10) ||
    props.theme.palette.white};
`;

export const HeaderText = styled.h2`
  color: ${props =>
    (props.backgroundColour === 'black' && props.theme.palette.white) ||
    props.theme.palette.black};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContentSemi = styled.div`
  flex: auto;

  & img {
    display: block;
    margin: 20px auto 0 auto;
  }

  ${breakpoint.desktop`
    flex: 0.5;
    align-self: flex-start;

    &:nth-child(2n) {
      flex: 0.4;
    }

    & img {
      display: block;
      margin: 0;
    }
  `};
`;

export const TextWrapper = styled(RichText)`
  color: ${props =>
    (props.backgroundColour === 'black' && props.theme.palette.white) ||
    props.theme.palette.black};
`;
