import React from 'react';
import PropTypes from 'prop-types';
import { Card, Thumbnail, CardContent, CategoryCTA } from './styles';
import CTA from '../cta';

const EventCard = ({ data }) => {
  if (!data) return null;

  const {
    event,
    cardText,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
  } = data;

  return (
    <Card>
      <Thumbnail
        mobileW={512}
        desktopW={512}
        image={event.thumbnailImage}
        description={event.eventName}
      />
      <CardContent>
        <h3>{event.eventName}</h3>
        <p>{cardText}</p>
        <CTA bg="red" fullWidth link={primaryCtaLink}>
          {primaryCtaText}
        </CTA>
      </CardContent>
      <CategoryCTA link={secondaryCtaLink}>{secondaryCtaText}</CategoryCTA>
    </Card>
  );
};

EventCard.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.object.isRequired,
    cardText: PropTypes.string.isRequired,
    primaryCtaText: PropTypes.string.isRequired,
    primaryCtaLink: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    secondaryCtaText: PropTypes.string.isRequired,
    secondaryCtaLink: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
  }),
};

export default EventCard;
