import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import ResponsiveImage from '../image/responsive';

const EventListCard = ({ data }) => {
  const { slug, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    thumbnailImage,
  } = event;

  return (
    <div>
      <LinkHandler internalLink={slug}>
        <ResponsiveImage
          mobileW={500}
          desktopW={500}
          image={thumbnailImage}
          description={eventName}
        />
        <div>{eventName}</div>
        <div>{displayLocation}</div>
        <div>{eventDisplayDate}</div>
      </LinkHandler>
    </div>
  );
};

EventListCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
  }),
};

export default EventListCard;
