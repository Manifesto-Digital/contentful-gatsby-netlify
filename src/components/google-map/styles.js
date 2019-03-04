import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import MapIcon from './map-icon.png';

export const Wrapper = styled.main`
  width: 100%;
  height: 400px;
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.small} 0;

  svg {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

export const MarkerWrapper = styled.div``;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 27px;
  height: 43px;
  background: url(${MapIcon}) top center;
  background-size: cover;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -100%);
  cursor: pointer;
  pointer-events: ${({ activeMarker }) => (activeMarker ? 'none' : 'auto')};
  &:hover {
    z-index: 1;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  width: 23px;
  height: 23px;
  padding-bottom: 1px;
  padding-left: 1px;
  color: ${({ theme }) => theme.palette.black};
  font-size: 27px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.palette.white};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 20%);
  transition: opacity 0.1s ease-in;
  opacity: ${({ activeMarker }) => (activeMarker ? 1 : 0)};
  pointer-events: none;
  pointer-events: ${({ activeMarker }) => (activeMarker ? 'auto' : 'none')};
  cursor: pointer;
`;

export const InfoInside = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const InfoAddress = styled.div`
  margin-bottom: 5px;
`;

export const MapIconAlt = styled(SVG)`
  svg {
    display: block;
    width: 27px;
    height: 43px;
  }
`;
