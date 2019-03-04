import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import { buttonReset } from '../styled/buttons';
import { linkStyles } from '../styled/links';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  padding: 0 ${({ theme }) => theme.spacing.standard};
  border: 2px solid ${({ theme }) => theme.palette.royalBlue};

  ${breakpoint.tablet`
    flex-direction: row;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  `}
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
`;

export const ShareLink = styled.a`
  ${buttonReset}
  ${linkStyles}
  display:flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.standard} 0;
  text-decoration: none;

  ${breakpoint.tablet`
    width: auto;
    padding: ${({ theme }) => theme.spacing.medium} 0;
  `}

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const StyledSVG = styled(SVG)`
  display: block;
  margin-right: ${({ theme }) => theme.spacing.standard};
  fill: ${({ theme }) => theme.palette.royalBlue};

  svg {
    width: 30px;
    height: 30px;
  }
`;
