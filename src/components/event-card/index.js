import React from 'react';
import PropTypes from 'prop-types';
import { Card, Thumbnail, CardContent, CategoryCTA } from './styles';
import CTA from '../cta';

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
        <CTA bg="red" fullWidth externalUrl={`/${primaryCtaLink[0].slug}`}>
          {primaryCtaText}
        </CTA>
      </CardContent>
      <CategoryCTA href={secondaryCtaLink.slug}>{secondaryCtaText}</CategoryCTA>
    </Card>
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
