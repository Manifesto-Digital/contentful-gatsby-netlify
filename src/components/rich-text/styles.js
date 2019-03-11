import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ sidebar, theme }) =>
    sidebar &&
    css`
      background-color: ${theme.palette.grey10};
      padding: ${theme.spacing.standard};
      margin-bottom: ${theme.spacing.standard};
    `}
`;
