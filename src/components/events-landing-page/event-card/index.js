import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../image/responsive';
import CTA from '../../cta';

const EventCard = ({ data }) => {
  const {
    event,
    cardText,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
  } = data;

  return (
    <div>
      <ResponsiveImage
        mobileW={357}
        desktopW={454}
        image={event.thumbnailImage}
        description={event.eventName}
      />
      <h3>{event.eventName}</h3>
      <p>{cardText}</p>
      <CTA bg="red" fullWidth internalLink={primaryCtaLink[0].slug}>
        {primaryCtaText}
      </CTA>
      <a href={secondaryCtaLink.slug}>{secondaryCtaText}</a>
    </div>
  );
};

EventCard.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.object.isRequired,
    cardText: PropTypes.string.isRequired,
    primaryCtaText: PropTypes.string.isRequired,
    primaryCtaLink: PropTypes.array.isRequired,
    secondaryCtaText: PropTypes.string.isRequired,
    secondaryCtaLink: PropTypes.object.isRequired,
  }),
};

export default EventCard;
