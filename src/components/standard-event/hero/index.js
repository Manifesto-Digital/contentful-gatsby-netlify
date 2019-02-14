import React from 'react';
import PropTypes from 'prop-types';
import iconSrc from '../../../utils/iconSrc';
import { consistentString } from '../../../utils/content-formatting';
import { eventStatuses } from '../data';
// Components
import Image from '../../image';
import CTA from '../../cta';
// Styles
import {
  Container,
  FlexBetweenContainer,
  Section,
} from '../../styled/containers';
import {
  FlexColumn,
  UnbulletedList,
  MapButton,
  MoneySpan,
  StyledButton,
  StyledCTA,
  StyledSVG,
} from './styles';

const EventHero = ({
  event,
  displayMap,
  mainCtaLink,
  mainCtaMethod,
  mainCtaText,
  formRef,
  toggleMapModal,
}) => {
  if (!event) return null;

  // Gets the CTA link, based on the event status and the CTA method
  const eventStatus = consistentString(event.eventStatus);
  const eventType = consistentString(event.eventType);
  const ctaMethod = consistentString(mainCtaMethod);
  const ctaLink =
    eventStatus !== 'sold-out' && ctaMethod === 'url' ? mainCtaLink : null;

  // Gets the CTA text, based on the event status and passed CTA text
  const ctaText = eventStatus === 'sold-out' ? 'Sold Out' : mainCtaText;

  return (
    <Section>
      <Container>
        <FlexBetweenContainer>
          {/* Left column */}
          <FlexColumn flexColumn1="0.35">
            <h1>{event.eventName}</h1>
            <UnbulletedList>
              <li>
                <StyledSVG src={iconSrc('map-marker')} cacheGetRequests />
                {event.displayLocation}

                {/* Button to show the map modal */}
                {displayMap && (
                  <MapButton onClick={toggleMapModal}>Map</MapButton>
                )}
              </li>
              <li>
                <StyledSVG src={iconSrc('calendar')} cacheGetRequests />
                {event.eventDisplayDate}
              </li>

              {/* If this isn't an "Art" type event, then display the below fields */}
              {eventType !== eventStatuses.artsAndEntertainment && (
                <>
                  <li>
                    <StyledSVG src={iconSrc('trophy')} cacheGetRequests />
                    {event.distance}
                  </li>
                  <li>
                    Registration fee:{' '}
                    <MoneySpan>£{event.registrationFee}</MoneySpan>
                  </li>
                  <li>
                    Sponsorship pledge: <MoneySpan>£{event.pledge}</MoneySpan>
                  </li>
                </>
              )}
            </UnbulletedList>

            {/* CTA if we have a valid CTA link */}
            {ctaLink && (
              <StyledCTA
                {...CTA.fromCMS({
                  buttonText: ctaText,
                  ctaColour: 'Red',
                  internalLink: {
                    slug: ctaLink,
                  },
                })}
                fullWidth
                onClick={() => {
                  window.scrollTo(0, formRef.current.offsetTop);
                }}
              />
            )}

            {/* Button as a prompt to go to a form */}
            {ctaMethod === 'form' && (
              <StyledButton
                bg="red"
                fullWidth
                onClick={() => {
                  if (!formRef || !formRef.current) {
                    return;
                  }
                  window.scrollTo(0, formRef.current.offsetTop);
                }}
              >
                {ctaText}
              </StyledButton>
            )}
          </FlexColumn>

          {/* Right column */}
          <FlexColumn flexColumn2="0.60" alignColumn2="center">
            {/* Event image */}
            {event.thumbnailImage && <Image image={event.thumbnailImage} />}
          </FlexColumn>
        </FlexBetweenContainer>
      </Container>
    </Section>
  );
};

EventHero.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    thumbnailImage: PropTypes.object,
    eventType: PropTypes.oneOf([
      'Run',
      'Cycle',
      'Challenge',
      'Arts & Entertainment',
    ]).isRequired,
    eventStatus: PropTypes.oneOf([
      'Register Interest',
      'Open',
      'Sold Out',
      'Closed',
      'Waiting List',
    ]).isRequired,
    eventSystemDate: PropTypes.string,
    eventDisplayDate: PropTypes.string,
    distance: PropTypes.string,
    pledge: PropTypes.number,
    eventLocation: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
    }),
    displayLocation: PropTypes.string.isRequired,
  }).isRequired,
  displayMap: PropTypes.bool,
  mainCtaLink: PropTypes.string,
  mainCtaMethod: PropTypes.oneOf(['Form', 'URL']),
  mainCtaText: PropTypes.string,
  formRef: PropTypes.object,
  toggleMapModal: PropTypes.func,
};
export default EventHero;
