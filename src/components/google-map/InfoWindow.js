import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import { InfoWrapper, Close, InfoInside, InfoAddress } from './styles';

const InfoWindow = ({ index, address, activeMarker, clearInfoWindow }) => {
  if (!address) return null;
  return (
    <>
      <InfoWrapper activeMarker={index === activeMarker}>
        <Close onClick={clearInfoWindow}>&times;</Close>
        <InfoInside>
          <InfoAddress>{address}</InfoAddress>
          <LinkHandler
            externalUrl={`https://www.google.co.uk/maps?daddr=${address}`}
            newTab
          >
            Directions
          </LinkHandler>
        </InfoInside>
      </InfoWrapper>
    </>
  );
};

InfoWindow.propTypes = {
  index: PropTypes.number.isRequired,
  address: PropTypes.string,
  activeMarker: PropTypes.number,
  clearInfoWindow: PropTypes.func,
};

export default InfoWindow;
