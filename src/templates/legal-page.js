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

const LegalPage = ({ data }) => {
  const { title } = data.contentfulPageAssemblyLegalPage;
  return (
    <Layout>
      <Container>
        <ContentWithSideBar>
          <SideBar left />
          <TwoThirds>
            <PageTitle legal>
              <h1>{title}</h1>
            </PageTitle>
          </TwoThirds>
        </ContentWithSideBar>
      </Container>
    </Layout>
  );
};
LegalPage.propTypes = {
  data: PropTypes.object,
};

export default LegalPage;

export const legalPageQuery = graphql`
  query legalPageQuery($slug: String!) {
    contentfulPageAssemblyLegalPage(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;
