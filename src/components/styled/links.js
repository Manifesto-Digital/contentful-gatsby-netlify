import { css } from 'styled-components';

export const linkStyles = css`
  color: ${props => props.theme.palette.sanMarinoBlue};
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`;
