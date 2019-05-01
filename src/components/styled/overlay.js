import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: ${({ theme }) => theme.palette.overlay};
  pointer-events: ${({ active }) => (active ? 'all' : 'none')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: 0.2s ease-in opacity;

  ${breakpoint.desktop`
    width: ${({ active }) => (active ? '100%' : '0')};
    opacity: 0;
    pointer-events: ${({ subMenuActive }) => (subMenuActive ? 'all' : 'none')};
  `}
`;
