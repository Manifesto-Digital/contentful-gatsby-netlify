import { css } from 'styled-components';

export const quoteStyles = css`
  flex: 1;
  position: relative;
  margin-right: ${({ theme }) => theme.spacing.standard};
  margin-bottom: 0;
  padding: ${({ theme }) =>
    ` ${theme.spacing.xl} ${theme.spacing.standard} ${theme.spacing.standard} ${
      theme.spacing.standard
    }`};
  border-left: 4px solid ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.headers.h3};
  font-weight: 300;
`;
