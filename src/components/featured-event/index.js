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

const FeaturedEvent = ({ data }) => {
  const { slug, mainCtaText, event } = data;
  const {
    eventName,
    displayLocation,
    eventDisplayDate,
    distance,
    thumbnailImage,
  } = event;

  return (
    <Wrapper>
      <SectionTag leftMargin>Featured event</SectionTag>
      <Thumbnail
        mobileW="512"
        desktopW="700"
        image={thumbnailImage}
        description={eventName}
      />
      <ContentWrapper>
        <h2>{eventName}</h2>
        <EventInfoList>
          <EventInfo>
            <EventIcon src={iconSrc('map-marker')} />
            {displayLocation}
          </EventInfo>
          <EventInfo>
            <EventIcon src={iconSrc('calendar')} />
            {eventDisplayDate}
          </EventInfo>
          <EventInfo>
            <EventIcon src={iconSrc('trophy')} />
            {distance}
          </EventInfo>
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
    event: PropTypes.object,
  }),
};

export default FeaturedEvent;
