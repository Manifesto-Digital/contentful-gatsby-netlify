import React from 'react';
import PropTypes from 'prop-types';
import Map from '../../google-map';
import { Container } from '../../styled/containers';

const ShopMap = ({ shop }) => (
  <Container>
    <Map
      insideContainer
      data={{
        locations: [{ location: shop.location, address: shop.shortAddress }],
      }}
    />
  </Container>
);

ShopMap.propTypes = {
  shop: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
    shortAddress: PropTypes.string.isRequired,
  }),
};

export default ShopMap;
