import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container } from '../components/styled/containers';

const EventsLandingPage = ({ data }) => {
  const {
    pageName,
    topTextSection,
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
    }
  }
`;
