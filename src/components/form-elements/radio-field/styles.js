import styled from 'styled-components';

export const Input = styled.input`
  margin-right: ${({ theme }) => theme.spacing.small};
  vertical-align: middle;
`;

export const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-right: ${({ marginRight, theme }) =>
    marginRight ? theme.spacing.small : null};
`;

export const Label = styled.label`
  margin-bottom: 0;
  line-height: 1;
  vertical-align: middle;
`;

export const LayoutWrapper = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : 'block')};
`;
