import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../styled/containers';
// components:
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import InfoWindow from './InfoWindow';
import LinkHandler from '../link-handler';
import { MapIconAlt, Address } from './styles';
import IconAlt from '../../assets/svg/icons/map-marker-alt-light.svg';

const Map = ({ data }) => {
  const { headerText, locations } = data;
  const [currentLocations, updateLocation] = useState([]);
  const [activeMarker, updateActiveMarker] = useState(-1);

  // Update map bounds based on list of places
  const getMapBounds = (map, maps) => {
    const bounds = new maps.LatLngBounds();
    currentLocations.forEach(place => {
      bounds.extend(new maps.LatLng(place.location.lat, place.location.lon));
    });
    return bounds;
  };

  // Bind to GoogleMaps API resize event handlers
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
        if (currentLocations.length === 1) map.setZoom(12);
      });
    });
  };

  // Once the API has loaded, run our map logic
  const apiIsLoaded = (map, maps) => {
    const bounds = getMapBounds(map, maps);
    map.fitBounds(bounds);
    // If there is only a single Marker, we dont want to zoom too much
    if (currentLocations.length === 1) map.setZoom(12);
    bindResizeListener(map, maps, bounds);
  };

  const markerClick = target => {
    updateActiveMarker(target);
  };

  const clearInfoWindow = () => {
    updateActiveMarker(-1);
  };

  useEffect(() => {
    updateLocation(locations);
  }, [locations]);

  return (
    <Container>
      <h2>{headerText}</h2>
      {currentLocations && (
        <>
          <GoogleMap
            defaultZoom={10}
            defaultCenter={[34.0522, -118.2437]}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          >
            {currentLocations.map((place, i) => (
              <Marker
                key={i}
                index={i}
                activeMarker={activeMarker}
                text={place.address}
                lat={place.location.lat}
                lng={place.location.lon}
                markerClick={e => markerClick(i, e)}
              >
                <InfoWindow
                  index={i}
                  address={place.address}
                  activeMarker={activeMarker}
                  clearInfoWindow={() => clearInfoWindow()}
                />
              </Marker>
            ))}
          </GoogleMap>
          {currentLocations.length === 1 && (
            <Address>
              {IconAlt && <MapIconAlt src={IconAlt} cacheGetRequests />}
              <LinkHandler
                externalUrl={`https://www.google.co.uk/maps?daddr=${
                  currentLocations[0].address
                }`}
                newTab
              >
                {currentLocations[0].address}
              </LinkHandler>
            </Address>
          )}
        </>
      )}
    </Container>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    displaySearch: PropTypes.bool,
    headerText: PropTypes.string,
    locations: PropTypes.array,
  }),
};

export default Map;
