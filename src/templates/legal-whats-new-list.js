import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { richTextPropTypes } from '../prop-types';
import Item from '../components/press-releases/list-item';
import Layout from '../components/layout';

import {
  Container,
  ContentWithSideBar,
  TwoThirds,
} from '../components/styled/containers';
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import LegalWhatsNewList from '../components/legal-whats-new-list';
import Pagination from '../components/pagination';

const LegalWhatsNew = ({ data, pageContext }) => {
  const { title, featuredLegalPage, introductoryText } = pageContext;
  const { pageInformation } = data.contentfulPageAssemblyLegalWhatsNewPage;
  const legalUpdatesItems = data.allContentfulPageAssemblyLegalPage.edges
    ? data.allContentfulPageAssemblyLegalPage.edges.map(edge => edge.node)
    : [];

  // We are passed one legal page more than we wish to display incase
  // featured item is also returned from the query and needs to be removed
  const legalUpdatesList = featuredLegalPage
    ? legalUpdatesItems.filter(item => item.id !== featuredLegalPage.id)
    : legalUpdatesItems.splice(-1, 1);

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <Container>
        <ContentWithSideBar>
          <TwoThirds>
            <PageTitle noContainer>
              <h1>{title}</h1>
            </PageTitle>
            <RichText richText={introductoryText} />
            <LegalWhatsNewList
              featuredItem={featuredLegalPage}
              items={legalUpdatesList}
            />
            <Pagination pageContext={pageContext} slug="legal/whats-new" />
          </TwoThirds>
        </ContentWithSideBar>
      </Container>
    </Layout>
  );
};

LegalWhatsNew.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.shape({
    introductoryText: PropTypes.shape(richTextPropTypes),
    currentPage: PropTypes.number,
    limit: PropTypes.number,
    numPages: PropTypes.number,
    skip: PropTypes.number,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

Item.propTypes = {
  title: PropTypes.string,
  datePosted: PropTypes.string,
};

export default LegalWhatsNew;

export const LegalWhatsNewQuery = graphql`
  query LegalWhatsNewQuery($skip: Int!, $limit: Int!, $id: String!) {
    contentfulPageAssemblyLegalWhatsNewPage(id: { eq: $id }) {
      title
      pageInformation {
        ...PageInformationFragment
      }
    }
    allContentfulPageAssemblyLegalPage(
      limit: $limit
      skip: $skip
      sort: { fields: [lastAmended], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          lastAmended
          pageInformation {
            shortDescription {
              shortDescription
            }
          }
        }
      }
    }
  }
`;
