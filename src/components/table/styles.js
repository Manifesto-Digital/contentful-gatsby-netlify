import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.small};
  vertical-align: top;
  border-collapse: collpase;
  background-color: ${({ theme }) => theme.palette.grey10};
`;
