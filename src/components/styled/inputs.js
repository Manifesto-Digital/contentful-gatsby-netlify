import { css } from 'styled-components';

export const inputStyles = css`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  background-size: 15px 15px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: ${props => props.theme.spacing.small};
`;
