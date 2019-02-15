import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';

const LegalLandingPage = ({ data }) => {
  const { pageName } = data.contentfulPageAssemblyLegalLandingPage;

  return (
    <Layout>
      <article>Hello World</article>
    </Layout>
  );
};

LegalLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyLegalLandingPage: PropTypes.object,
  }),
};

export default LegalLandingPage;

export const eventsLandingPageQuery = graphql`
  query legalLandingPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyLegalLandingPage(slug: { eq: $slug }) {
      pageName
    }
  }
`;
