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

  ${breakpoint.desktop`
    position: relative;
    width:100%;
    background: ${({ theme }) => theme.palette.grey10};
    box-shadow: none;
    transition: none;
    transform: translateX(0);
    overflow-y: visible;
  `}
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  ${breakpoint.desktop`
    flex-direction: row;
    width: auto;
    margin-right: ${({ theme }) => theme.spacing.standard};
  `}
`;

export const Menus = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  ${breakpoint.desktop`
    flex-direction: row;
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.small};
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding: ${({ topLevel, theme }) =>
    topLevel ? `0` : `${theme.spacing.small}}`};
  border-bottom: ${({ topLevel, theme }) =>
    topLevel ? ' none' : `1px solid ${theme.palette.grey10}`};
  ${MenuList} {
    padding: 5px ${({ theme }) => theme.spacing.small};
  }

  ${breakpoint.desktop`
    margin-right: auto;
     padding: ${({ topLevel, theme }) =>
       topLevel ? `0` : `${theme.spacing.small}}`};
  `}
`;

export const ItemLink = styled(LinkHandler)`
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.fontsize.small};
  text-decoration: none;
`;

export const AdditionalMenu = styled(MenuList)`
  padding: 0 ${({ theme }) => theme.spacing.small};
  ${Item} {
    padding: 15px ${({ theme }) => theme.spacing.small};
    &:last-child {
      border: none;
      ${breakpoint.desktop`
        margin-left: ${({ theme }) => theme.spacing.standard};
      `}
    }
  }
  ${breakpoint.desktop`
    flex-direction: row;
    min-width: 200px;
    margin-left: auto;
    margin-right: 0;
      ${ItemLink} {
        border:none;
      }
  `}
`;

export const SubMenu = styled.ul`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing.small};
  border: none;
  list-style: none;

  ${breakpoint.desktop`
    position: absolute;
    top: 58px;
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

  ${Item} {
    &:last-child {
      border: none;
    }
    ${breakpoint.desktop`
      flex: 0 1 calc(${100 / 3}% - 10px);
      width: 32%;
      margin-left: ${({ theme }) => theme.spacing.small};
      border: none;
    `}

    &:hover {
      ${breakpoint.desktop`
          background: ${({ theme }) => theme.palette.black};
        ${ItemLink} {
          color: ${({ theme }) => theme.palette.white};
        }
      `}
    }
  }
`;
