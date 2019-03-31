import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import { buttonReset } from '../styled/buttons';
import { breakpoint } from '../theme/breakpoint';

export const Logo = styled(SVG)`
  display: block;
  width: 95px;

  ${breakpoint.desktop`
    width: 115px;
  `}
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 15px;
  background: ${({ theme }) => theme.palette.primary};

  ${breakpoint.desktop`
    height: 68px;
    padding: ${({ theme }) => theme.spacing.standard} 25px;
  `}
`;

export const MobileMenuOpen = styled.button`
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

export const BurgerIcon = styled(SVG)`
  display: block;
  width: 20px;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.palette.grey10};
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 100%;
  background: ${({ theme }) => theme.palette.grey10};

  ${breakpoint.desktop`
    padding: 0
    ${({ theme }) => theme.spacing.standard};
  `}
`;

export const MenuControls = styled.div`
  display: flex;
`;
