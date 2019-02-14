import styled from 'styled-components';

export const OtherEventsWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  padding: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.grey10};
  position: relative;
`;
