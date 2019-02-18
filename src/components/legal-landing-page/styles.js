import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const Subheader = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.palette.grey45};
`;
