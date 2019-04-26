import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import InfoWindow from './InfoWindow';
import { Wrapper, MapIconAlt, Address } from './styles';
import { Container } from '../styled/containers';
import IconAlt from '../../assets/svg/icons/map-marker-alt-light.svg';

const Map = ({ data, insideContainer }) => {
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

  useEffect(() => {
    updateLocation(locations);
  }, [locations]);

  return (
    <Wrapper>
      <Container padding={!insideContainer}>
        {currentLocations && (
          <>
            {headerText && <h2>{headerText}</h2>}
            <GoogleMap
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
                  markerClick={e => updateActiveMarker(i, e)}
                >
                  {place.address && (
                    <InfoWindow
                      index={i}
                      address={place.address}
                      location={place.location}
                      activeMarker={activeMarker}
                      clearInfoWindow={() => updateActiveMarker(-1)}
                    />
                  )}
                </Marker>
              ))}
            </GoogleMap>
            {currentLocations.length === 1 && currentLocations[0].address && (
              <Address>
                {IconAlt && <MapIconAlt src={IconAlt} cacheGetRequests />}
                <a
                  href={`https://www.google.co.uk/maps?daddr=${
                    currentLocations[0].location.lat
                  }, ${currentLocations[0].location.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentLocations[0].address}
                </a>
              </Address>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    displaySearch: PropTypes.bool,
    headerText: PropTypes.string,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        location: PropTypes.shape({
          lat: PropTypes.number,
          lng: PropTypes.number,
        }),
      })
    ),
  }),
  insideContainer: PropTypes.bool,
};

Map.defaultProps = {
  insideContainer: false,
};
export default Map;
