import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../styled/buttons';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.palette.grey10};
`;

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};
  background: ${props => props.theme.palette.grey10};
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.primary};
`;

export const Logo = styled(SVG)`
  display: block;
  width: 115px;
`;

export const MenuControl = styled.button`
  display: block;
  ${buttonReset}
`;

export const StyledMenuSVG = styled(SVG)`
  display: block;
  width: 20px;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 65%;
  background: ${props => props.theme.palette.white};
  box-shadow: -1px 0 14px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);

  ${props =>
    props.active &&
    css`
      transform: translateX(0);
    `};
`;
