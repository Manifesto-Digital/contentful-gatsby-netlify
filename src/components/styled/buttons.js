import styled, { css } from 'styled-components';

export const buttonStyles = css`
  display: inline-block;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small} 1em;
  font-weight: normal;
  background-color: ${({ disabled, bg, theme }) =>
    (disabled && theme.palette.grey40) ||
    (bg === 'red' && theme.palette.primary) ||
    (bg === 'black' && theme.palette.black) ||
    (bg === 'blue' && theme.palette.sanMarinoBlue) ||
    (bg === 'donate' && theme.palette.donate) ||
    (bg === 'white-outline' && 'transparent')};

  border: ${({ bg, theme }) =>
    bg === 'white-outline' ? `1px solid ${theme.palette.white}` : 'none'};

  color: ${({ bg, theme }) =>
    (bg === 'red' && theme.palette.white) ||
    (bg === 'black' && theme.palette.white) ||
    (bg === 'blue' && theme.palette.white) ||
    (bg === 'donate' && theme.palette.white) ||
    (bg === 'white-outline' && theme.palette.white)};

  ${({ fullWidth }) => fullWidth && 'width: 100%'};

  &:hover {
    color: ${({ bg, theme }) =>
      (bg === 'red' && theme.palette.white) ||
      (bg === 'black' && theme.palette.white) ||
      (bg === 'blue' && theme.palette.white) ||
      (bg === 'donate' && theme.palette.white) ||
      (bg === 'white-outline' && theme.palette.white)};
  }
`;

/**
 * Removes all user agent styles from a button
 */
export const buttonReset = css`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;

export const SignUpButton = styled.a`
  ${buttonStyles};
  border: 4px solid ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.white};
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.palette.black};
    background-color: ${({ theme }) => theme.palette.white};
  }
`;
