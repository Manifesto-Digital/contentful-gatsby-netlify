import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const Subheader = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.palette.grey45};
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SubPageTitle = styled.h2``;
