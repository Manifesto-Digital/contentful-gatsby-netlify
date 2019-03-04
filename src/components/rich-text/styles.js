import styled from 'styled-components';
import LinkHandler from '../link-handler';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.standard} 0;
  background-color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.primary) ||
    (bg === 'blue' && theme.palette.link) ||
    (bg === 'black' && theme.palette.black) ||
    (bg === 'green' && theme.palette.donate)};
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? '0' : theme.spacing.large};
`;

export const Header = styled.h2`
  color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.white) ||
    (bg === 'blue' && theme.palette.white) ||
    (bg === 'black' && theme.palette.white) ||
    (bg === 'green' && theme.palette.white)};
`;
export const StyledLinkHandler = styled(LinkHandler)`
  color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.white) ||
    (bg === 'blue' && theme.palette.white) ||
    (bg === 'black' && theme.palette.white) ||
    (bg === 'green' && theme.palette.white)};
`;
