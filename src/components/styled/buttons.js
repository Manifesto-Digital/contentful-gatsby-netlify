import { css } from 'styled-components';

export const buttonStyles = css`
  display: inline-block;
  padding: ${props => props.theme.spacing.small} 1em;
  font-weight: normal;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'black' && props.theme.palette.black) ||
    (props.bg === 'blue' && props.theme.palette.sanMarinoBlue) ||
    (props.bg === 'donate' && props.theme.palette.donate) ||
    (props.bg === 'white outline' && 'transparent')};

  border: ${props =>
    props.bg === 'white outline'
      ? `1px solid ${props.theme.palette.white}`
      : 'none'};

  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'donate' && props.theme.palette.white) ||
    (props.bg === 'white outline' && props.theme.palette.white)};
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
