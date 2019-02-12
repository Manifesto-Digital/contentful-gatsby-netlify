import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { breakpoint } from '../components/theme/breakpoint';
import { consistentString } from '../utils/content-formatting';
import useToggle from '../utils/useToggle';
import theme from '../components/theme/variables';
// Components
import Layout from '../components/layout';
import Image from '../components/image';
import ContentForm from '../components/form';
import RichText from '../components/rich-text';
// TODO: Use these with the sidebar when implemented
// import ContentCard from '../components/content-card';
// import Assemblies from '../components/assemblies';
import CTA from '../components/cta';
import Button from '../components/button';
// Assets
import MapMarker from '../assets/svg/icons/map-marker-alt-light.svg';
// Styles
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';

// TODO: Maybe move these out to the "Event" object? {
const eventTypes = {
  run: consistentString('Run'),
  cycle: consistentString('Cycle'),
  challenge: consistentString('Challenge'),
  artsAndEntertainment: consistentString('Arts & Entertainment'),
};

const eventStatuses = {
  registerInterest: consistentString('Register Interest'),
  open: consistentString('Open'),
  soldOut: consistentString('Sold Out'),
  closed: consistentString('Closed'),
  waitingList: consistentString('Waiting List'),
};
// }

const icons = {
  'map-marker': MapMarker,
  // Calendar
  // Trophy
};

const Page = ({ data }) => {
  const [displayMapModal, mapModalDisplayState] = useToggle(false);
  const formRef = useRef(null);

  // Sets "displayMap" to "false" if "event", "event.eventLocation", "event.eventLocation.lat", and/or "event.eventLocation.lon" are null. This will stop there being a "Map" button without having a map to display
  const dataTemp = data.contentfulPageAssemblyStandardEvent;
  data.contentfulPageAssemblyStandardEvent.displayMap =
    dataTemp.event &&
    dataTemp.event.eventLocation &&
    dataTemp.event.eventLocation.lat &&
    dataTemp.event.eventLocation.lon;

  const {
    event,
    mainCtaText,
    mainCtaMethod,
    mainCtaLink,
    signUpTextLeft,
    signUpTextRight,
    bodyCopy,
    displayMap,
    registerInterestForm,
    signUpForm,
    waitingListForm,
    // modules,
    // TODO: Use this with the sidebar when implemented
    // sidebarCards,
  } = data.contentfulPageAssemblyStandardEvent;

  // TODO: Use this with the sidebar when implemented
  // const cards = sidebarCards ? sidebarCards.card : null;

  // Builds the Google Maps URL for the map modal
  const mapFrameSrc =
    event &&
    event.eventLocation &&
    `https://www.google.com/maps/embed/v1/place?key=AIzaSyCp8IoFqy0SA8sGDYUy0Hbk8Ktdc46zcGE&q=${encodeURIComponent(
      event.displayLocation
    )}&attribution_source=${encodeURIComponent(
      event.eventName
    )}&#10&attribution_web_url=${encodeURIComponent(
      window.location.href
    )}&attribution_ios_deep_link_id=comgooglemaps://?daddr=/@${
      event.eventLocation.lat
    },${event.eventLocation.lon}`;

  // Gets the CTA text, based on the event status and passed CTA text
  const ctaText =
    consistentString(event.eventStatus) === 'sold-out'
      ? 'Sold out'
      : mainCtaText;

  // Gets the CTA link, based on the evemt status and the CTA method
  let ctaLink;
  if (consistentString(event.eventStatus) !== 'sold-out') {
    if (consistentString(mainCtaMethod) === 'url') {
      ctaLink = mainCtaLink;
    }
  }

  return (
    <Layout>
      <article>
        <Section>
          {event && (
            <Container>
              <FlexContainer>
                {/* Left column */}
                <FlexColumn flexColumn1="0.3">
                  <h1>{event.eventName}</h1>
                  <UnbulletedList>
                    <li>
                      <Icon
                        icon={consistentString('map-marker')}
                        iconColour={theme.palette.primary}
                        cacheGetRequests
                      />
                      {event.displayLocation}

                      {/* Button to show/hide the map modal */}
                      {displayMap && (
                        <MapButton
                          data-remodal-target="map"
                          onClick={mapModalDisplayState}
                        >
                          Map
                        </MapButton>
                      )}
                    </li>
                    <li>
                      <Icon
                        icon={consistentString('map-marker')}
                        iconColour={theme.palette.primary}
                        cacheGetRequests
                      />
                      {event.eventDisplayDate}
                    </li>

                    {/* If this isn't an "Art" type event, then display the below fields */}
                    {event.eventType !== eventTypes.artsAndEntertainment && (
                      <>
                        <li>
                          <Icon
                            icon={consistentString('map-marker')}
                            iconColour={theme.palette.primary}
                            cacheGetRequests
                          />
                          {event.distance}
                        </li>
                        <li>
                          Registration fee:{' '}
                          <MoneySpan>£{event.registrationFee}</MoneySpan>
                        </li>
                        <li>
                          Sponsorship pledge:{' '}
                          <MoneySpan>£{event.pledge}</MoneySpan>
                        </li>
                      </>
                    )}
                  </UnbulletedList>

                  {/* Displays a linked CTA if we have a valid CTA link */}
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

                  {/* Displays a styled button if this is a prompt to go to a form */}
                  {consistentString(mainCtaMethod) === 'form' && (
                    <StyledButton
                      bg="red"
                      onClick={() => {
                        if (!formRef || !formRef.current) {
                          return;
                        }
                        window.scrollTo(0, formRef.current.offsetTop);
                      }}
                      fullWidth
                    >
                      {ctaText}
                    </StyledButton>
                  )}
                </FlexColumn>

                {/* Right column */}
                <FlexColumn flexColumn2="0.65" alignColumn2="center">
                  {/* Event image */}
                  {event && event.thumbnailImage && (
                    <Image image={event.thumbnailImage} />
                  )}
                </FlexColumn>
              </FlexContainer>
            </Container>
          )}
        </Section>
        <Section backgroundColour={theme.palette.grey10}>
          <Container>
            <FlexContainer>
              <FlexColumn flexColumn1="0.5">
                {bodyCopy && <RichText richText={signUpTextLeft} />}
              </FlexColumn>
              <FlexColumn flexColumn2="0.4">
                {bodyCopy && <RichText richText={signUpTextRight} />}
              </FlexColumn>
            </FlexContainer>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                {bodyCopy && <RichText richText={bodyCopy} />}
              </TwoThirds>
              <SideBar>
                {/*
                TODO: This will require a different ContentModel item, which can then break down the different page types within it
                eg "<SidebarCards cards={cards}>"
                  
                {cards.map((card, i) => (
                  <ContentCard key={i} data={card} />
                ))}
                */}
              </SideBar>
            </ContentWithSideBar>
          </Container>
        </Section>

        {/* "Register Interest": Register interest form */}
        {consistentString(event.eventStatus) ===
          eventStatuses.registerInterest &&
          registerInterestForm && (
            <Section ref={formRef}>
              <ContentForm data={registerInterestForm} />
            </Section>
          )}

        {/* "Open": Sign up form */}
        {consistentString(event.eventStatus) === eventStatuses.open &&
          signUpForm && (
            <Section ref={formRef}>
              <ContentForm data={signUpForm} />
            </Section>
          )}

        {/* "Waiting List: Waiting list form */}
        {consistentString(event.eventStatus) === eventStatuses.waitingList &&
          waitingListForm && (
            <Section ref={formRef}>
              <ContentForm data={waitingListForm} />
            </Section>
          )}
        {/* <Assemblies assemblies={modules} /> */}
      </article>

      {/* Map modal */}
      {displayMap && (
        <MapModal displayMapModal={displayMapModal}>
          <div
            role="presentation"
            className="map-modal__overlay"
            onClick={mapModalDisplayState}
          >
            <div
              className="map-modal__content"
              data-remodal-id="map"
              data-remodal-options="hashTracking: false, closeOnOutsideClick: true"
            >
              <button
                type="button"
                className="map-modal__close"
                onClick={mapModalDisplayState}
                data-remodal-action="close"
              />
              <div className="map-modal__inner">
                <iframe
                  className="map-modal__iframe"
                  title="map"
                  frameBorder="0"
                  allowFullScreen
                  src={mapFrameSrc}
                />
              </div>
            </div>
          </div>
        </MapModal>
      )}
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

const Icon = ({ icon, iconColour }) => {
  const chosenIcon = icons[icon] || null;
  return (
    chosenIcon && (
      <StyledSVG src={chosenIcon} iconColour={iconColour} cacheGetRequests />
    )
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
};

// TODO: Maybe move these styles into "components/styled/containers" {
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing.medium} 0;
  background-color: ${props =>
    props.backgroundColour
      ? props.backgroundColour
      : props.theme.palette.white};
`;

const FlexColumn = styled.div`
  flex: auto;
  margin-top: ${props => props.theme.spacing.standard};

  &:nth-child(2n) {
    margin-top: 0;
  }

  ${breakpoint.desktop`
    margin-top: 0;
    flex: ${props => (props.flexColumn1 ? props.flexColumn1 : `auto`)};
    flex-direction: column;
    display: flex;

    &:nth-child(2n) {
      flex: ${props => (props.flexColumn2 ? props.flexColumn2 : `auto`)};
      align-self: ${props =>
        props.alignColumn2 ? props.alignColumn2 : `start`};
    }
  `};
`;
// }

// TODO: Use this with the sidebar when implemented
// const Sidebar = styled(SideBar)``;

// TODO: Maybe move these into their own style file, eg "components/styled/standard-event-page/styles.js" {
const UnbulletedList = styled.ul`
  margin-top: ${props => props.theme.spacing.small};
  list-style: none;
  padding-left: 0;
`;

const StyledCTA = styled(CTA)`
  margin-top: auto;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
  cursor: pointer;
`;

const StyledSVG = styled(SVG)`
  width: 20px;
  height: 20px;
  margin-top: -2px;
  margin-right: 10px;
  vertical-align: top;
  fill: ${props => props.iconColour || props.theme.palette.black};
  display: inline-block;
`;

const MoneySpan = styled.span`
  font-weight: bold;
  color: ${props => props.theme.palette.primary};
`;

const MapButton = styled.a`
  margin-left: ${props => props.theme.spacing.small};
  padding: 5px;
  background: ${props => props.theme.palette.sanMarinoBlue};
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const MapModal = styled.div`
  display: ${props => (props.displayMapModal ? 'block' : 'none')};

  & .map-modal__overlay {
    text-align: center;
    overflow: auto;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.palette.overlay};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .map-modal__content {
    width: 400px;
    background: ${props => props.theme.palette.offWhite};
    padding: ${props => props.theme.spacing.medium};
    position: relative;
  }

  & .map-modal__close {
    width: 35px;
    height: 35px;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    outline: 0;
    color: ${props => props.theme.palette.sanMarinoBlue};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    overflow: visible;
    display: block;

    &:before {
      width: 35px;
      line-height: 35px;
      content: 'x';
      font-size: 25px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
  }

  & .map-modal__inner {
    padding-bottom: 75%;
    position: relative;
  }

  & .map-modal__iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
// }

export default Page;

export const standardEventPageQuery = graphql`
  query standardEventPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyStandardEvent(slug: { eq: $slug }) {
      slug

      # TODO: Change this to use the Event fragment when it's implemented
      event {
        id
        eventName
        shortDescription
        thumbnailImage {
          file {
            url
            fileName
          }
          description
        }
        eventType
        eventStatus
        eventSystemDate
        eventDisplayDate
        distance
        registrationFee
        pledge
        eventLocation {
          lat
          lon
        }
        displayLocation
        notifiedTeamEmail
      }

      mainCtaText
      mainCtaMethod
      mainCtaLink
      displayMap
      signUpTextLeft {
        childContentfulRichText {
          html
        }
      }
      signUpTextRight {
        childContentfulRichText {
          html
        }
      }
      bodyCopy {
        childContentfulRichText {
          html
        }
      }
      registerInterestForm {
        ...AssemblyFormFragment
      }
      signUpForm {
        ...AssemblyFormFragment
      }
      waitingListForm {
        ...AssemblyFormFragment
      }

      #modules { - Not sure what this will be yet
      #  ...Module
      #}

      # TODO: This needs to be converted to logic below (as per "templates/page.js").
      # TODO: Then the types will need to be broken out within the "SidebarCards" code (as per "components/hero/index.js")
      # ... on Node {
      #     ...PageType1
      #     ...PageType2
      #     ...etc
      # }

      # TODO: Use these with the sidebar when implemented
      #sidebarCards {
      #  cards {
      #    id
      #    slug
      #  }
      #}
    }
  }
`;
