import { css } from 'styled-components';

export const linkStyles = css`
  color: ${({ theme }) => theme.palette.sanMarinoBlue};
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;
