import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import LinkHandler from '../link-handler';

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  list-style: none;
  padding: ${({ active, theme }) => (active ? theme.spacing.small : null)};
`;

export const SVGIcon = styled(SVG)`
  display: block;

  svg {
    width: 27px;
    height: 27px;
    display: block;
  }
`;

export const Link = styled(LinkHandler)`
  display: block;
  padding: ${({ theme }) => theme.spacing.small};
  ${({ disabled, theme }) =>
    disabled &&
    `
    color: ${theme.palette.grey25};
    pointer-events: none;
  `}
`;
