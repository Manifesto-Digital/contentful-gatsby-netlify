import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import LinkHandler from '../../link-handler';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.menu};
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
  transform: ${({ active }) =>
    active ? 'translateX(0)' : ' translateX(120%)'};
  overflow-y: scroll;

  ${breakpoint.tabletWide`
    position: relative;
    width:100%;
    background: ${({ theme }) => theme.palette.grey10};
    box-shadow: none;
    transition: none;
    transform: translateX(0);
    overflow-y: visible;
  `}
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};

  ${breakpoint.tabletWide`
    width: auto;
    margin-right: ${({ theme }) => theme.spacing.standard};
  `}
`;

export const Menus = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0
    ${({ theme }) => `${theme.spacing.standard} ${theme.spacing.standard}`};

  ${breakpoint.tabletWide`
    flex-direction: row;
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 5px ${({ theme }) => theme.spacing.standard}
  `}
`;

export const ItemLink = styled(LinkHandler)`
  padding: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.small};
  text-decoration: none;
`;

export const AdditionalMenu = styled(Menu)`
  ${ItemLink} {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};
    &:last-child {
      border: none;
    }
  }

  ${breakpoint.tabletWide`
    flex-direction: row;
    margin-left: auto;
    margin-right: 0;
      ${ItemLink} {
        margin-left: ${({ theme }) => theme.spacing.standard};
        border:none;
      }
  `}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  ${breakpoint.tabletWide`
    margin-right: auto;
  `}
`;

export const SubMenu = styled(Menu)`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  margin-left: ${({ theme }) => theme.spacing.small};
  border: none;

  ${breakpoint.tabletWide`
    position: absolute;
    top: 52px;
    right: 0;
    left: 0;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 0;
    background: ${({ theme }) => theme.palette.grey15};
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) =>
    theme.spacing.small}
  `}

  ${ItemLink} {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};

    ${breakpoint.tabletWide`
      flex: 0 1 calc(${100 / 3}% - 10px);
      width: 32%;
      margin-left: ${({ theme }) => theme.spacing.small};
      padding: ${({ theme }) => theme.spacing.small};
      border: none;
    `}

    &:hover {
      ${breakpoint.tabletWide`
        background: ${({ theme }) => theme.palette.black};
        color: ${({ theme }) => theme.palette.white};
      `}
    }

    &:last-child {
      border: none;
    }
  }
`;
