import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../styled/buttons';

export const Close = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  width: 35px;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
`;

export const SubNavButton = styled(Close)`
  height: auto;
  margin-left: 10px;
`;

export const StyledMenuSVG = styled(SVG)`
  display: block;
  width: 20px;
`;

export const ArrowSVG = styled(SVG)`
  display: block;
  fill: ${props => props.theme.palette.black};
  width: 20px;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 65%;
  height: 100%;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: -1px 0 14px rgba(0, 0, 0, 0.5);
  transform: translateX(120%);
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
  transform: ${({ active }) => (active ? 'translateX(0)' : null)};
  overflow-y: scroll;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.standard}
    ${({ theme }) => theme.spacing.standard};
`;

export const NavigationWrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};
`;

export const SubNavigationWrap = styled(NavigationWrap)`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  margin-left: ${({ theme }) => theme.spacing.small};

  a {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};

    &:last-child {
      border: none;
    }
  }
`;

export const Item = styled.a`
  padding: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.small};
  text-decoration: none;
`;

export const ItemWrap = styled.div`
  display: flex;
  width: 100%;
`;
