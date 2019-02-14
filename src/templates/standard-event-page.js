import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import useToggle from '../utils/useToggle';
import { eventStatuses } from '../components/standard-event/data';
// Components
import EventHero from '../components/standard-event/hero';
import Layout from '../components/layout';
// Components
import ContentForm from '../components/form';
import RichText from '../components/rich-text';
import Modal from '../components/modal';
import EventMap from '../components/standard-event/map';
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
  const standardEvent = data.contentfulPageAssemblyStandardEvent;
  if (!standardEvent.event) return null;

  const [mapModal, toggleMapModal] = useToggle(false);
  const formRef = useRef(null);

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
  } = data.contentfulPageAssemblyStandardEvent;

  const { eventLocation } = event;
  const eventStatus = consistentString(event.eventStatus);

  return (
    <Layout>
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

        <TwoColumnTextAndImageBlock data={twoColumn} />

        {bodyCopy && (
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                <RichText richText={bodyCopy} />
              </TwoThirds>
              <SideBar />
            </ContentWithSideBar>
          </Container>
        )}

        {/* "Register Interest": Register interest form */}
        {eventStatus === eventStatuses.registerInterest &&
          registerInterestForm && (
            <div ref={formRef}>
              <ContentForm data={registerInterestForm} />
            </div>
          )}

        {/* "Open": Sign up form */}
        {eventStatus === eventStatuses.open && signUpForm && (
          <div ref={formRef}>
            <ContentForm data={signUpForm} />
          </div>
        )}

        {/* "Waiting List: Waiting list form */}
        {eventStatus === eventStatuses.waitingList && waitingListForm && (
          <div ref={formRef}>
            <ContentForm data={waitingListForm} />
          </div>
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
    contentfulPageAssemblyStandardEvent(slug: { eq: $slug }) {
      slug
      event {
        ...EventFragment
      }
      mainCtaText
      mainCtaMethod
      mainCtaLink
      displayMap
      twoColumn {
        ...TwoColumnTextAndImageBlockFragment
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
    }
  }
`;
