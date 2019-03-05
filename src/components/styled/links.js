import styled, { css } from 'styled-components';
import LinkHandler from '../link-handler';

export const linkStyles = css`
  color: ${({ theme }) => theme.palette.sanMarinoBlue};
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const CoveringLink = styled(LinkHandler)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;
