import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: ${({ theme }) => theme.spacing.standard};
`;

export const Label = styled.label`
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
