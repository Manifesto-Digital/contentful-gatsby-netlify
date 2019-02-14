import React from 'react';
import PropTypes from 'prop-types';

const EventListCard = ({ data }) => {
  const { eventName, displayLocation, eventDisplayDate } = data;

  return <div>Hello world</div>;
};

EventListCard.propTypes = {
  data: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    displayLocation: PropTypes.string,
    eventDisplayDate: PropTypes.string,
  }),
};

export default EventListCard;
