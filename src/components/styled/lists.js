import { css } from 'styled-components';

export const squareBulletPoints = css`
  /**
  * Square bulletpoints, outlined for nested lists
  */
  padding-left: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.large};

    &::before {
      content: ' ';
      position: absolute;
      top: 8px;
      left: ${({ theme }) => theme.spacing.small};
      display: block;
      width: ${({ theme }) => theme.spacing.small};
      height: ${({ theme }) => theme.spacing.small};
      background: ${({ theme }) => theme.palette.black};
    }

    ul {
      padding-left: 0;
      list-style: none;
      li:before {
        background: transparent;
        border: 1px solid ${({ theme }) => theme.palette.black};
      }
    }
  }
`;
