import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CategoryCTA } from './styles';
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
    <Card>
      <ResponsiveImage
        mobileW={357}
        desktopW={454}
        image={event.thumbnailImage}
        description={event.eventName}
      />
      <CardContent>
        <h3>{event.eventName}</h3>
        <p>{cardText}</p>
        <CTA bg="red" fullWidth externalUrl={primaryCtaLink[0].slug}>
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
