import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';

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
        <Container>
          <TwoThirds>
            <h1>{pageName}</h1>
            {strapline && <h3>{strapline}</h3>}
            {summary && <RichText richText={summary} />}
          </TwoThirds>
        </Container>
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
        eventName
        displayLocation
        eventDisplayDate
        distance
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
