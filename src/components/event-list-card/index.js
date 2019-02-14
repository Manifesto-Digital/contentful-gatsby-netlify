import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardLink,
  Thumbnail,
  CardContent,
  CardInfoList,
  CardInfo,
  InfoIcon,
} from './styles';
import iconSrc from '../../utils/iconSrc';

const EventListCard = ({ data }) => {
  const { slug, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    thumbnailImage,
  } = event;

  return (
    <CardLink internalLink={{ slug }}>
      <Card>
        <Thumbnail
          mobileW={500}
          desktopW={500}
          image={thumbnailImage}
          description={eventName}
        />
        <CardContent>
          <h3>{eventName}</h3>
          <CardInfoList>
            {displayLocation && (
              <CardInfo>
                <InfoIcon src={iconSrc('map-marker')} />
                {displayLocation}
              </CardInfo>
            )}
            {eventDisplayDate && (
              <CardInfo>
                <InfoIcon src={iconSrc('calendar')} />
                {eventDisplayDate}
              </CardInfo>
            )}
          </CardInfoList>
        </CardContent>
      </Card>
    </CardLink>
  );
};

EventListCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
  }),
};

export default EventListCard;
