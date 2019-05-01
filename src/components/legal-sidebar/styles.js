import styled from 'styled-components';
import LinkHandler from '../link-handler';

export const MenuLink = styled(LinkHandler)`
  font-weight: ${({ theme, activeParent }) =>
    activeParent ? theme.fontWeight.bold : 'normal'};
  color: ${({ theme, activePage }) => activePage && theme.palette.primary};
`;

export const UnorderedList = styled.ul`
  padding-left: ${({ theme, menuDepth }) =>
    menuDepth === 0 ? '0' : theme.spacing.standard};
  border-left: ${({ theme, menuDepth }) =>
    (menuDepth === 1 && `3px solid ${theme.palette.grey15}`) ||
    (menuDepth === 2 && `3px solid ${theme.palette.grey45}`)};
`;

export const ListItem = styled.li`
  list-style: none;
`;
