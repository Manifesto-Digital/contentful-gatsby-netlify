import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
// Styles
import { MapWrapper } from './styles';

const EventMap = ({ eventLocation }) => (
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyCp8IoFqy0SA8sGDYUy0Hbk8Ktdc46zcGE',
      }}
      defaultCenter={{ lat: eventLocation.lat, lng: eventLocation.lon }}
      defaultZoom={10}
    />
  </MapWrapper>
);

EventMap.propTypes = {
  eventLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventMap;
