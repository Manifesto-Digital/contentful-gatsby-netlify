import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import FeaturedEvent from '../components/featured-event';
import EventListCard from '../components/event-list-card';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import { OtherEventsWrapper } from '../components/event-category-page/styles';
import { SectionTag } from '../components/styled/tags';

const EventCategoryPage = ({ data }) => {
  const {
    pageName,
    strapline,
    summary,
    featuredEvent,
  } = data.contentfulPageAssemblyEventCategory;

  const events = data.allContentfulTopicEvent.edges;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
        </PageTitle>
        <Container>
          <TwoThirds>
            {strapline && <h3>{strapline}</h3>}
            {summary && <RichText richText={summary} />}
          </TwoThirds>

          <FeaturedEvent data={featuredEvent[0]} />
        </Container>

        <OtherEventsWrapper>
          <Container>
            <SectionTag>Other events</SectionTag>
            <TwoThirds>
              {events.map((event, key) => (
                <EventListCard data={event} key={key} />
              ))}
            </TwoThirds>
          </Container>
        </OtherEventsWrapper>
      </article>
    </Layout>
  );
};

EventCategoryPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyEventCategory: PropTypes.object,
    allContentfulTopicEvent: PropTypes.object,
  }),
};

export default EventCategoryPage;

export const eventCategoryPageQuery = graphql`
  query eventCategoryPageTemplateQuery($slug: String!, $type: String!) {
    contentfulPageAssemblyEventCategory(slug: { eq: $slug }) {
      pageName
      strapline
      summary {
        childContentfulRichText {
          html
        }
      }
      featuredEvent {
        slug
        mainCtaText
        event {
          eventName
          displayLocation
          eventDisplayDate
          distance
          thumbnailImage {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulTopicEvent(filter: { eventType: { eq: $type } }) {
      edges {
        node {
          eventName
          displayLocation
          eventDisplayDate
        }
      }
    }
  }
`;
