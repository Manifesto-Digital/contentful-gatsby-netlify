import styled from 'styled-components';
import LinkHandler from '../link-handler';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.standard} 0;
  background-color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.primary) ||
    (bg === 'san-marino-blue' && theme.palette.sanMarinoBlue) ||
    (bg === 'black' && theme.palette.black)};
  margin-bottom: ${({ removeMarginBottom, sidebar, theme }) =>
    (removeMarginBottom && '0') ||
    (sidebar && theme.spacing.standard) ||
    theme.spacing.large};
`;

export const Header = styled.h2`
  color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.white) ||
    (bg === 'san-marino-blue' && theme.palette.white) ||
    (bg === 'black' && theme.palette.white)};
`;
export const StyledLinkHandler = styled(LinkHandler)`
  color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.white) ||
    (bg === 'san-marino-blue' && theme.palette.white) ||
    (bg === 'black' && theme.palette.white)};

  &:hover {
    color: white;
  }
`;
