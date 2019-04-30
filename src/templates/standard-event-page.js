import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import useToggle from '../utils/useToggle';
import { eventStatuses } from '../components/standard-event/data';
// Components
import SideBarAssemblies from '../components/assemblies/sidebar';
import EventHero from '../components/standard-event/hero';
import Layout from '../components/layout';
import ContentForm from '../components/form';
import RichText from '../components/rich-text';
import Modal from '../components/modal';
import EventMap from '../components/standard-event/map';
import Assemblies from '../components/assemblies';
// Styles
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';
import TwoColumnTextAndImageBlock from '../components/two-column-text-and-image-block';
import { consistentString } from '../utils/content-formatting';

const Page = ({ data }) => {
  const standardEvent = data.contentfulPageStandardEvent;
  const [mapModal, toggleMapModal] = useToggle(false);
  const formRef = useRef(null);

  if (!standardEvent.event) return null;

  const {
    event,
    mainCtaText,
    mainCtaMethod,
    mainCtaLink,
    displayMap,
    registerInterestForm,
    signUpForm,
    waitingListForm,
    twoColumn,
    bodyCopy,
    assemblies,
    sidebarAssemblies,
    pageInformation,
  } = data.contentfulPageStandardEvent;

  const { eventLocation } = event;
  const eventStatus = consistentString(event.eventStatus);

  return (
    <Layout pageInformation={pageInformation} pageTitle={event.eventName}>
      <article>
        <EventHero
          event={event}
          displayMap={displayMap}
          mainCtaLink={mainCtaLink}
          mainCtaMethod={mainCtaMethod}
          mainCtaText={mainCtaText}
          formRef={formRef}
          toggleMapModal={toggleMapModal}
        />

        {twoColumn && <TwoColumnTextAndImageBlock data={twoColumn} />}
        {bodyCopy && (
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                <RichText richText={bodyCopy} />
                <Assemblies assemblies={assemblies} insideContainer />
              </TwoThirds>
              <SideBar>
                <SideBarAssemblies assemblies={sidebarAssemblies} />
              </SideBar>
            </ContentWithSideBar>
          </Container>
        )}

        {/* "Register Interest": Register interest form */}
        {eventStatus === eventStatuses.registerInterest &&
          registerInterestForm && (
            <Container>
              <ContentWithSideBar>
                <TwoThirds>
                  <div ref={formRef}>
                    <ContentForm insideContainer data={registerInterestForm} />
                  </div>
                </TwoThirds>
                <SideBar />
              </ContentWithSideBar>
            </Container>
          )}

        {/* "Open": Sign up form */}
        {eventStatus === eventStatuses.open && signUpForm && (
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                <div ref={formRef}>
                  <ContentForm insideContainer data={signUpForm} />
                </div>
              </TwoThirds>
              <SideBar />
            </ContentWithSideBar>
          </Container>
        )}

        {/* "Waiting List: Waiting list form */}
        {eventStatus === eventStatuses.waitingList && waitingListForm && (
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                <div ref={formRef}>
                  <ContentForm insideContainer data={waitingListForm} />
                </div>
              </TwoThirds>
              <SideBar />
            </ContentWithSideBar>
          </Container>
        )}
        {/* <Assemblies assemblies={modules} /> */}
      </article>

      {/* Map modal */}
      {displayMap && (
        <Modal isOpen={mapModal} onRequestClose={() => toggleMapModal()}>
          <EventMap eventLocation={eventLocation} />
        </Modal>
      )}
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export default Page;

export const standardEventPageQuery = graphql`
  query standardEventPageTemplateQuery($slug: String!) {
    contentfulPageStandardEvent(slug: { eq: $slug }) {
      slug
      event {
        ...EventFragment
      }
      mainCtaText
      mainCtaMethod
      displayMap
      twoColumn {
        ...TwoColumnTextAndImageBlockFragment
      }
      bodyCopy {
        json
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
      sidebarAssemblies {
        ...SidebarFragment
      }
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...CardsWithIconsFragment
          ...ContentCardBannerFragment
          ...CtaAssemblyFragment
          ...DownloadBannerAssemblyFragment
          ...AssemblyFormFragment
          ...TestimonialsAssemblyFragment
          ...AdviceSearchBoxComponentFragment
          ...DonationBanner
          ...GoogleMapFragment
          ...InlineCallout
          ...LinkBoxFragment
          ...ShareBlockFragment
          ...StatsFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
