import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: ${({ theme }) => theme.spacing.medium} 0
    ${({ theme }) => theme.spacing.standard};
  margin: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  position: relative;
`;

export const SectionTag = styled.div`
  display: inline-block;
  position: absolute;
  top: -25px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.small};
`;
