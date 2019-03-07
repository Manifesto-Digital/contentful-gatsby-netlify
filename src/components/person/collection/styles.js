import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.standard};
`;

export const Header = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
