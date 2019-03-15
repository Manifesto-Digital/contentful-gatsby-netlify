import React from 'react';
import PropTypes from 'prop-types';
import { InfoWrapper, Close, InfoInside, InfoAddress } from './styles';

const InfoWindow = ({
  index,
  address,
  activeMarker,
  clearInfoWindow,
  location,
}) => {
  if (!address) return null;
  return (
    <>
      <InfoWrapper activeMarker={index === activeMarker}>
        <Close onClick={clearInfoWindow}>&times;</Close>
        <InfoInside>
          <InfoAddress>{address}</InfoAddress>
          <a
            href={`https://www.google.co.uk/maps?daddr=${location.lat}, ${
              location.lon
            }`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Directions
          </a>
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
  location: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
};

export default InfoWindow;
