import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapWrapper } from './styles';

const GoogleMap = ({ children, onGoogleApiLoaded }) => (
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyCp8IoFqy0SA8sGDYUy0Hbk8Ktdc46zcGE',
      }}
      defaultZoom={10}
      defaultCenter={[34.0522, -118.2437]}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={onGoogleApiLoaded}
    >
      {children}
    </GoogleMapReact>
  </MapWrapper>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onGoogleApiLoaded: PropTypes.func,
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
