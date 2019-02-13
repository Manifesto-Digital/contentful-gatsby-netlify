import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import ResponsiveImage from '../image/responsive';

const FeaturedEvent = ({ data }) => {
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    distance,
    thumbnailImage,
  } = data;

  return (
    <Wrapper>
      <ResponsiveImage
        mobileW="512"
        desktopW="692"
        image={thumbnailImage}
        description={eventName}
      />
      <div>
        <h2>{eventName}</h2>
        <p>{displayLocation}</p>
        <p>{eventDisplayDate}</p>
        <p>{distance}</p>
      </div>
    </Wrapper>
  );
};

FeaturedEvent.propTypes = {
  data: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    displayLocation: PropTypes.string,
    eventDisplayDate: PropTypes.string,
    distance: PropTypes.string,
    thumbnailImage: PropTypes.object.isRequired,
  }),
};

export default FeaturedEvent;
