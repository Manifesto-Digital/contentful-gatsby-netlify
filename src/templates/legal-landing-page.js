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
  const {
    pageName,
    subheader,
    introductionText,
    pageReference,
    sideBarLinks,
  } = data.contentfulPageAssemblyLegalLandingPage;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
          <div>{subheader}</div>
        </PageTitle>
        <Container>
          <TwoThirds>
            <RichText richText={introductionText} />
          </TwoThirds>
        </Container>
      </article>
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
      subheader
      introductionText {
        childContentfulRichText {
          html
        }
      }
      pageReferences {
        title
        slug
      }
      sideBarLinks {
        title
        slug
      }
    }
  }
`;
