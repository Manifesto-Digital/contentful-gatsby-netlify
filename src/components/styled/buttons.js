import styled, { css } from 'styled-components';

export const buttonStyles = css`
  display: inline-block;
  text-align: center;
  padding: ${props => props.theme.spacing.small} 1em;
  font-weight: normal;
  background-color: ${props =>
    (props.disabled && props.theme.palette.grey60) ||
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'black' && props.theme.palette.black) ||
    (props.bg === 'blue' && props.theme.palette.sanMarinoBlue) ||
    (props.bg === 'donate' && props.theme.palette.donate) ||
    (props.bg === 'white-outline' && 'transparent')};

  border: ${props =>
    props.bg === 'white-outline'
      ? `1px solid ${props.theme.palette.white}`
      : 'none'};

  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'donate' && props.theme.palette.white) ||
    (props.bg === 'white-outline' && props.theme.palette.white)};

  ${props => props.fullWidth && 'width: 100%'};

  &:hover {
    color: ${props => props.theme.palette.white};
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
  border: 4px solid ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.white};
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${props => props.theme.palette.black};
    background-color: ${props => props.theme.palette.white};
  }
`;
