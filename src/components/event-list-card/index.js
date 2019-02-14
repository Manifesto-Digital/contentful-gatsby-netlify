import React from 'react';
import PropTypes from 'prop-types';

const EventListCard = ({ data }) => {
  console.log(data);
  const { slug, event } = data;
  const { eventName, displayLocation, eventDisplayDate } = event;

  return <div>Hello world</div>;
};

EventListCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
  }),
};

export default EventListCard;
