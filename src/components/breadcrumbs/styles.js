import styled from 'styled-components';
import LinkHandler from '../link-handler';

export const BreadcrumbList = styled.ul`
  margin: 0;
  padding: 0.8em 0;
`;

export const BreadcrumbListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin: 0 0.4em 0 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontsize.small};

  &:after {
    content: '>';
    margin-left: 0.4em;
  }
  &:last-child {
    &:after {
      content: '';
    }
  }
`;

export const BreadcrumbAnchor = styled(LinkHandler)`
  text-decoration: none;
`;
