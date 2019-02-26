import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  margin: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  position: relative;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
