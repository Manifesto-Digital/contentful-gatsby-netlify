import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: ${({ paddingBottom, theme }) =>
    paddingBottom ? theme.spacing.large : 0};
  color: ${({ legal }) => legal && 'red'};

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.standard};
    padding-top: ${({ theme }) => theme.spacing.large};
  }

  p:last-of-type {
    margin-bottom: ${({ paddingBottom }) => (paddingBottom ? 0 : null)};
  }
`;
