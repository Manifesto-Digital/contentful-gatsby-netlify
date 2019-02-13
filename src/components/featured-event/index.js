import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import ResponsiveImage from '../image/responsive';
import LinkHandler from '../link-handler';

const FeaturedEvent = ({ data }) => {
  const { slug, mainCtaText, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    distance,
    thumbnailImage,
  } = event;

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
        <p>
          <LinkHandler internalLink={{ slug }}>{mainCtaText}</LinkHandler>
        </p>
      </div>
    </Wrapper>
  );
};

FeaturedEvent.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    mainCtaText: PropTypes.string.isRequired,
    event: PropTypes.object,
  }),
};

export default FeaturedEvent;
