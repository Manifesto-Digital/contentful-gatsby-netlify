import styled from 'styled-components';
import { removeListStyles } from '../styled/utils';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing.large};
`;

export const UnorderedList = styled.ul`
  ${removeListStyles}
`;
export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding-left: ${({ theme }) => theme.spacing.standard};
  border-left: 4px solid
    ${({ featured, theme }) =>
      featured ? theme.palette.primary : theme.palette.grey40};
`;

export const ItemTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const LastAmended = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
