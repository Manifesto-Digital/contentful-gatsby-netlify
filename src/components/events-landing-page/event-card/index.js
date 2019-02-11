import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../image/responsive';
import CTA from '../../cta';

const EventCard = ({ data }) => {
  const {
    event,
    cardText,
    primaryCTAText,
    primaryCTALink,
    bottomCTAText,
    bottomCTALink,
  } = data;

  return (
    <div>
      <ResponsiveImage
        mobileW={357}
        desktopW={454}
        image={event.thumbnailImage}
      />
      <h3>{event.eventName}</h3>
      <p>Test content right here</p>
      <CTA bg="red" fullWidth internalLink="/">
        View event details
      </CTA>
      <div>More cool events</div>
    </div>
  );
};

EventCard.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.object.isRequired,
    cardText: PropTypes.string.isRequired,
    primaryCTAText: PropTypes.string.isRequired,
    primaryCTALink: PropTypes.string.isRequired,
    bottomCTAText: PropTypes.string.isRequired,
    bottomCTALink: PropTypes.string.isRequired,
  }),
};

export default EventCard;
