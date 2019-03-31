import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import LinkHandler from '../../link-handler';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.menu};
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
  transform: ${({ active }) =>
    active ? 'translateX(0)' : ' translateX(120%)'};
  z-index: ${({ active }) => (active ? '10' : 1)};
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
  `}
`;

export const Menus = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;

  ${breakpoint.desktop`
    flex-direction: row;
  justify-content: ${({ legal }) => legal && 'flex-end'};
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.small};
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding: ${({ topLevel, legal, theme }) =>
    (legal && topLevel && `15px ${theme.spacing.standard}`) ||
    (topLevel && '0') ||
    `${theme.spacing.small}}`};
  border-bottom: ${({ topLevel, theme }) =>
    topLevel ? ' none' : `1px solid ${theme.palette.grey10}`};
  border-bottom: ${({ topLevel, legal, theme }) =>
    (legal && topLevel && `1px solid ${theme.palette.grey10}`) ||
    (topLevel && 'none') ||
    `1px solid ${theme.palette.grey10}`};

  ${MenuList} {
    padding: 5px ${({ theme }) => theme.spacing.small};
    ${breakpoint.desktop`
      padding:5px 0;
    `}

    ${breakpoint.desktop`
    margin-right: auto;
     padding: ${({ topLevel, theme }) =>
       topLevel ? `0` : `${theme.spacing.small}`};
  `}
  }
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
    display: ${({ legal }) => legal && 'none'};
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
    theme.spacing.small};
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

export const SkipToContent = styled.a`
  display: block;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 0;
  margin: 0 auto;
  overflow: hidden;

  &:focus {
    height: auto;
  }
`;
