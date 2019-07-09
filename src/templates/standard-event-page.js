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
import Breadcrumbs from '../components/breadcrumbs';
// Styles
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';
import TwoColumnTextAndImageBlock from '../components/two-column-text-and-image-block';
import { consistentString } from '../utils/content-formatting';

const Page = ({ data, pageContext }) => {
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
        <Container>
          <Breadcrumbs
            parentPages={pageContext.menuParent}
            currentTitle={event.eventName}
          />
        </Container>
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
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              {bodyCopy && <RichText richText={bodyCopy} />}

              {assemblies && (
                <Assemblies assemblies={assemblies} insideContainer />
              )}
              {/* "Register Interest": Register interest form */}
              {eventStatus === eventStatuses.registerInterest &&
                registerInterestForm && (
                  <div ref={formRef}>
                    <ContentForm insideContainer data={registerInterestForm} />
                  </div>
                )}

              {/* "Open": Sign up form */}
              {eventStatus === eventStatuses.open && signUpForm && (
                <div ref={formRef}>
                  <ContentForm insideContainer data={signUpForm} />
                </div>
              )}

              {/* "Waiting List: Waiting list form */}
              {eventStatus === eventStatuses.waitingList && waitingListForm && (
                <div ref={formRef}>
                  <ContentForm insideContainer data={waitingListForm} />
                </div>
              )}
            </TwoThirds>
            <SideBar>
              <SideBarAssemblies assemblies={sidebarAssemblies} />
            </SideBar>
          </ContentWithSideBar>
        </Container>
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
  pageContext: PropTypes.object,
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
