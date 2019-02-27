import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.large} 0;
  padding: ${({ theme }) => theme.spacing.standard};
  background: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  border-radius: ${({ theme }) => theme.borderradius.small};
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export const ListItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  padding-right: ${({ theme }) => theme.spacing.standard};
  font-size: ${({ theme }) => theme.fontsize.small};
  font-weight: 400;
  text-decoration: none;
  ${breakpoint.desktop`
    flex: 0 0 ${({ rowCount }) => 100 / rowCount}%;
  `};

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;
