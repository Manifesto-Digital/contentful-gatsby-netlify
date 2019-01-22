import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.palette.overlay};
  pointer-events: none;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: 0.2s ease-in opacity;
`;
