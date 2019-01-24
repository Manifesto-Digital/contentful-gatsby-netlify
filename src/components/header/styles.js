import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../styled/buttons';
import { breakpoint } from '../theme/breakpoint';

export const Logo = styled(SVG)`
  display: block;
  width: 95px;

  ${breakpoint.desktop`
    width: 115px;
  `}
`;

export const LogoWrapper = styled.a`
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

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1150px;
  width: 100%;
  background: ${({ theme }) => theme.palette.grey10};

  ${breakpoint.desktop`
    padding: 0
    ${({ theme }) => theme.spacing.standard};
  `}
`;
