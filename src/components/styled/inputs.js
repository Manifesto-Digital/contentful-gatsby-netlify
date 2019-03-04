import { css } from 'styled-components';

export const inputStyles = css`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  background-size: 15px 15px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing.small};
`;
