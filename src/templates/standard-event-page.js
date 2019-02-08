import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { breakpoint } from '../components/theme/breakpoint';
import { consistentString } from '../utils/content-formatting';
import theme from '../components/theme/variables';
// Components
import Layout from '../components/layout';
import Image from '../components/image';
import ContentForm from '../components/form';
import RichText from '../components/rich-text';
import Assemblies from '../components/assemblies';
// Styles
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';

// TODO: Maybe move these out to the "Event" object
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

const Page = ({ data }) => {
  // TODO: Maybe updated "displayMap" to change to "false" if "event", "event.eventLocation", "event.eventLocation.lat", and/or "event.eventLocation.lon" are null (as below)
  // data.displayMap = data.displayMap && data.event && data.event.eventLocation && data.event.eventLocation.lat && data.event.eventLocation.lon;

  const {
    event,
    signUpTextLeft,
    signUpTextRight,
    bodyCopy,
    displayMap,
    registerInterestForm,
    signUpForm,
    waitingListForm,
    modules,
  } = data.contentfulPageAssemblyStandardEvent;

  // TODO: Update this later
  const eventName = encodeURIComponent(event.eventName);
  const locationName = encodeURIComponent(event.displayLocation);
  const pageUrl = encodeURIComponent(''); // TODO: Get the current page URL
  const mapFrameSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCp8IoFqy0SA8sGDYUy0Hbk8Ktdc46zcGE&q=${locationName}&attribution_source=${eventName}&#10&attribution_web_url=${pageUrl}&attribution_ios_deep_link_id=comgooglemaps://?daddr=/@${
    event.eventLocation.lat
  },${event.eventLocation.lon}`;

  return (
    <Layout>
      <article>
        <Section>{event && <EventDetails data={data} />}</Section>
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
              <SideBar>{/* sidebarItems */}</SideBar>
            </ContentWithSideBar>
          </Container>
        </Section>

        {/* "Register Interest": Register interest form */}
        {consistentString(event.eventStatus) ===
          eventStatuses.registerInterest &&
          registerInterestForm && (
            <Section>
              <ContentForm data={registerInterestForm} />
            </Section>
          )}

        {/* "Open": Sign up form */}
        {consistentString(event.eventStatus) === eventStatuses.open &&
          signUpForm && (
            <Section>
              <ContentForm data={signUpForm} />
            </Section>
          )}

        {/* "Waiting List: Waiting list form */}
        {consistentString(event.eventStatus) === eventStatuses.waitingList &&
          waitingListForm && (
            <Section>
              <ContentForm data={waitingListForm} />
            </Section>
          )}
        <Assemblies assemblies={modules} />
      </article>

      {/* Map modal */}
      {displayMap && (
        <div
          className="remodal-wrapper remodal-is-closed"
          /* TODO: Re-hide this after styling */
          /* Style="display: none;" */
        >
          <div
            className="remodal remodal-is-initialized remodal-is-closed"
            data-remodal-id="map"
            data-remodal-options="hashTracking: false, closeOnOutsideClick: true"
          >
            <button
              type="button"
              data-remodal-action="close"
              className="remodal-close"
            />
            <div
              className="map-container"
              Style="padding-bottom: 75%; position: relative; width: 100%"
            >
              <iframe
                title="map"
                Style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                frameBorder="0"
                src={mapFrameSrc}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyStandardEvent: PropTypes.object,
  }),
};

const EventDetails = ({ data }) => {
  const {
    event,
    mainCtaText,
    mainCtaMethod,
    mainCtaLink,
    displayMap,
    registerInterestForm,
    signUpForm,
    waitingListForm,
  } = data.contentfulPageAssemblyStandardEvent;

  let formId = '';
  if (mainCtaMethod === 'form') {
    formId = registerInterestForm ? registerInterestForm.formId : '';
    formId = signUpForm ? signUpForm.formId : '';
    formId = waitingListForm ? waitingListForm.formId : '';
  }

  // TODO: Style this properly
  return (
    <Container>
      <FlexContainer>
        {/* Left column */}
        <FlexColumn flexColumn1="0.3">
          <h1>{event.eventName}</h1>
          <UnbulletedList>
            <li className="details">
              <i className="fa fa-map-marker" aria-hidden="true" />
              {/* // TODO: Replace this with the proper way of displaying an icon (correct "src" content) */}
              <Icon
                src="../../assets/svg/icons/map-marker-alt-light.svg"
                iconColour={theme.palette.primary}
                cacheGetRequests
              />
              {event.displayLocation}

              {/* Displays the "Map" prompt if requested */}
              {displayMap && (
                <a
                  href="#map"
                  className="button--link--small"
                  data-remodal-target="map"
                >
                  Map
                </a>
              )}
            </li>
            <li className="details">
              <i className="fa fa-calendar" aria-hidden="true" />
              {event.eventDisplayDate}
            </li>

            {/* If this isn't an "Art" type event, then display the below fields */}
            {event.eventType !== eventTypes.artsAndEntertainment && (
              <>
                <li className="details">
                  <i className="fa fa-trophy" aria-hidden="true" />
                  {event.distance}
                </li>
                <li className="money">
                  Registration fee: <strong>£{event.registrationFee}</strong>
                </li>
                <li className="money">
                  Sponsorship pledge: <strong>£{event.pledge}</strong>
                </li>
              </>
            )}
          </UnbulletedList>

          {/* TODO: Switch this to use the <CTA/> element */}
          {/* Displays the CTA based on the status of the event */}
          {event.eventStatus === 'sold-out' ? (
            <a className="button button--cta">Sold out</a>
          ) : (
            <a href={formId || mainCtaLink} className="button button--cta">
              {mainCtaText}
            </a>
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
  );
};

EventDetails.propTypes = {
  data: {
    event: PropTypes.object.isRequired,
    mainCtaText: PropTypes.string.isRequired,
    mainCtaMethod: PropTypes.string.isRequired,
    mainCtaLink: PropTypes.string.isRequired,
    displayMap: PropTypes.bool.isRequired,
    registerInterestForm: PropTypes.object,
    signUpForm: PropTypes.object,
    waitingListForm: PropTypes.object,
  },
};

// TODO: Maybe move these styles into "components/styled/containers"
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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

  & img {
    display: block;
    margin: 20px auto 0 auto;
  }

  ${breakpoint.desktop`
    flex: ${props => (props.flexColumn1 ? props.flexColumn1 : `auto`)};
    align-self: ${props => (props.alignColumn1 ? props.alignColumn1 : `none`)};

    &:nth-child(2n) {
      flex: ${props => (props.flexColumn2 ? props.flexColumn2 : `auto`)};
      align-self: ${props =>
        props.alignColumn2 ? props.alignColumn2 : `none`};
    }

    & img {
      display: block;
      margin: 0;
    }
  `};
`;

const UnbulletedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Icon = styled(SVG)`
  fill: ${props =>
    (props.iconColour === 'black' && props.theme.palette.black) ||
    props.theme.palette.white};

  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: top;
  margin-top: -2px;
`;

export default Page;

export const standardEventPageQuery = graphql`
  query standardEventPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyStandardEvent(slug: { eq: $slug }) {
      id
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
    }
  }
`;
