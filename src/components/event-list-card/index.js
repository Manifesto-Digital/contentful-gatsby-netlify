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
import { dateAsString } from '../../utils/dates';

const EventListCard = ({ data }) => {
  const { slug, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    eventSystemDate,
    thumbnailImage,
  } = event;

  const date = eventDisplayDate || dateAsString(eventSystemDate, 'DD/M/YYYY');

  return (
    <Card>
      <Thumbnail image={thumbnailImage} />
      <CardContent>
        <h3>{eventName}</h3>
        <CardInfoList>
          {displayLocation && (
            <CardInfo>
              <InfoIcon src={iconSrc('map-marker')} />
              {displayLocation}
            </CardInfo>
          )}
          <CardInfo>
            <InfoIcon src={iconSrc('calendar')} />
            {date}
          </CardInfo>
        </CardInfoList>
      </CardContent>
      <CardLink internalLink={{ slug }}>{eventName}</CardLink>
    </Card>
  );
};

EventListCard.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    event: PropTypes.shape({
      eventName: PropTypes.string.isRequired,
      displayLocation: PropTypes.string,
      eventDisplayDate: PropTypes.string,
      eventSystemDate: PropTypes.string.isRequired,
      distance: PropTypes.string,
      thumbnailImage: PropTypes.object.isRequired,
    }),
  }),
};

export default EventListCard;
