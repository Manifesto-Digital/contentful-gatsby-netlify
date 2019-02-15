import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
// Styles
import { MapWrapper } from './styles';

const EventMap = ({ eventLocation }) => {
  if (!process.env.GOOGLE_MAP_API_KEY) return null;
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_API_KEY,
        }}
        defaultCenter={{ lat: eventLocation.lat, lng: eventLocation.lon }}
        defaultZoom={10}
      />
    </MapWrapper>
  );
};

EventMap.propTypes = {
  eventLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventMap;
