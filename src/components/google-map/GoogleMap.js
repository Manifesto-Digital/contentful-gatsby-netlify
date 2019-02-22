import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import { Wrapper } from './styles';

const GoogleMap = ({ children }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.MAP_KEY,
      }}
      defaultZoom={10}
      defaultCenter={[34.0522, -118.2437]}
      yesIWantToUseGoogleMapApiInternals
    >
      {children}
    </GoogleMapReact>
  </Wrapper>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
