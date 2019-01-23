import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../styled/buttons';
import { breakpoint } from '../theme/breakpoint';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.palette.grey10};
`;

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.palette.grey10};

  ${breakpoint.desktop`
    padding: 0
    ${({ padding, theme }) => (padding === false ? 0 : theme.spacing.standard)};
  `}
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.palette.primary};

  ${breakpoint.desktop`
    padding: ${({ theme }) => theme.spacing.standard};
  `}
`;

export const Logo = styled(SVG)`
  display: block;
  width: 115px;
`;

export const Open = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  width: 45px;
  height: 50px;
  padding: 0;
  margin-left: auto;

  ${breakpoint.desktop`
    display: none;
  `}
`;

export const StyledMenuSVG = styled(SVG)`
  display: block;
  width: 20px;
`;
