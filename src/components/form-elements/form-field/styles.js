import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : 'block')};
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;
