import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Thumbnail,
  ContentWrapper,
  EventInfoList,
  EventInfo,
  EventIcon,
} from './styles';
import LinkHandler from '../link-handler';
import { SectionTag } from '../styled/tags';
import iconSrc from '../../utils/iconSrc';
import { dateAsString } from '../../utils/dates';

const FeaturedEvent = ({ data }) => {
  const { slug, mainCtaText, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    eventSystemDate,
    distance,
    thumbnailImage,
  } = event;

  const date = eventDisplayDate || dateAsString(eventSystemDate, 'DD/M/YYYY');

  return (
    <Wrapper>
      <SectionTag leftMargin>Featured event</SectionTag>
      <Thumbnail
        mobileW={512}
        desktopW={700}
        image={thumbnailImage}
        description={eventName}
      />
      <ContentWrapper>
        <h2>{eventName}</h2>
        <EventInfoList>
          {displayLocation && (
            <EventInfo>
              <EventIcon src={iconSrc('map-marker')} />
              {displayLocation}
            </EventInfo>
          )}
          <EventInfo>
            <EventIcon src={iconSrc('calendar')} />
            {date}
          </EventInfo>
          {distance && (
            <EventInfo>
              <EventIcon src={iconSrc('trophy')} />
              {distance}
            </EventInfo>
          )}
        </EventInfoList>
        <LinkHandler internalLink={{ slug }}>{mainCtaText}</LinkHandler>
      </ContentWrapper>
    </Wrapper>
  );
};

FeaturedEvent.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    mainCtaText: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
  }),
};

export default FeaturedEvent;
