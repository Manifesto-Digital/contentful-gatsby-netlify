import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.palette.grey10};
  padding-top: ${({ theme }) => theme.spacing.standard};
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
