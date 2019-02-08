import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import EventCard from '../components/events-landing-page/event-card';
import { Wrapper, SectionTag } from '../components/events-landing-page/styles';

const EventsLandingPage = ({ data }) => {
  const {
    pageName,
    topTextSection,
    featuredEvents,
  } = data.contentfulPageAssemblyEventsLandingPage;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
        </PageTitle>
        <Container>
          {topTextSection && <RichText richText={topTextSection} />}
        </Container>
        <Wrapper>
          <Container>
            <TwoThirds>
              <SectionTag>Featured events</SectionTag>
              {featuredEvents.map((featuredEvent, key) => (
                <EventCard key={key} data={{ event: featuredEvent }} />
              ))}
            </TwoThirds>
          </Container>
        </Wrapper>
      </article>
    </Layout>
  );
};

EventsLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyEventsLandingPage: PropTypes.object,
  }),
};

export default EventsLandingPage;

export const eventsLandingPageQuery = graphql`
  query eventsLandingPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyEventsLandingPage(slug: { eq: $slug }) {
      pageName
      topTextSection {
        childContentfulRichText {
          html
        }
      }
      featuredEvents {
        eventName
        thumbnailImage {
          file {
            url
          }
        }
      }
    }
  }
`;
