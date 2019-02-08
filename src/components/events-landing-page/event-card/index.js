import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ data }) => {
  const {
    event,
    cardText,
    primaryCTAText,
    primaryCTALink,
    bottomCTAText,
    bottomCTALink,
  } = data;

  return <div>{event.eventName}</div>;
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
