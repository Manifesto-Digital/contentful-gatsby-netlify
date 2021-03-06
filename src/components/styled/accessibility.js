import styled, { css } from 'styled-components';
// Used to hide item from view but readable for screen readers
export const visibilityStyles = css`
  padding: 0;
  margin: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

export const VisuallyHidden = styled.span`
  ${visibilityStyles};
`;
