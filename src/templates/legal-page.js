import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';

const LegalPage = ({ data, pageContext }) => {
  console.log('dataaaa', data, pageContext);

  return (
    <Layout>
      <PageTitle legal>
        <h1>WOO</h1>
      </PageTitle>
      <Container>
        <ContentWithSideBar>
          <TwoThirds>
            <h3>Main</h3>
          </TwoThirds>
          <SideBar>
            <h3>SIDEBAR</h3>
          </SideBar>
        </ContentWithSideBar>
      </Container>
    </Layout>
  );
};

LegalPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default LegalPage;

export const legalPageQuery = graphql`
  query legalPageQuery($slug: String!) {
    contentfulPageAssemblyLegalPage(slug: { eq: $slug }) {
      slug
    }
  }
`;
