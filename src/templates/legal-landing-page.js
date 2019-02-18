import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import Item from '../components/press-releases/list-item';
// Styles
import {
  Container,
  TwoThirds,
  ContentWithSideBar,
  SideBar,
} from '../components/styled/containers';

const LegalLandingPage = ({ data }) => {
  const {
    pageName,
    subheader,
    introductionText,
    pageReferences,
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
        <div>
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                {pageReferences &&
                  pageReferences.map((pageReference, key) => (
                    <Item key={key} data={pageReference} />
                  ))}
              </TwoThirds>
            </ContentWithSideBar>
          </Container>
        </div>
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
