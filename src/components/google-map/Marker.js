import React from 'react';
import PropTypes from 'prop-types';
import { MarkerWrapper, Icon } from './styles';

const Marker = ({ index, text, activeMarker, children, markerClick }) => (
  <MarkerWrapper>
    <Icon
      alt={text}
      onClick={markerClick}
      activeMarker={index === activeMarker}
    />
    {children}
  </MarkerWrapper>
);

Marker.defaultProps = {
  markerClick: null,
};

Marker.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  activeMarker: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  markerClick: PropTypes.func,
};

export default Marker;
