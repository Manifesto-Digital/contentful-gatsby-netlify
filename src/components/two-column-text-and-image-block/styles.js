import styled from 'styled-components';
import RichText from '../rich-text';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? '0' : theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large} 0;

  background-color: ${({ backgroundColour, theme }) =>
    (backgroundColour === 'white' && theme.palette.white) ||
    (backgroundColour === 'black' && theme.palette.black) ||
    (backgroundColour === 'grey' && theme.palette.grey10) ||
    theme.palette.white};
`;

export const HeaderText = styled.h2`
  color: ${({ backgroundColour, theme }) =>
    (backgroundColour === 'black' && theme.palette.white) ||
    theme.palette.black};
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
  color: ${({ backgroundColour, theme }) =>
    (backgroundColour === 'black' && theme.palette.white) ||
    theme.palette.black};
`;
