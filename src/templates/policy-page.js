import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import Policy from '../components/policy';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';

const PolicyPage = ({ data }) => {
  const {
    pageName,
    policy,
    pageInformation,
  } = data.contentfulPageAssemblyPolicyPage;

  return (
    <Layout pageInformation={pageInformation} pageTitle={pageName}>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
        </PageTitle>
        <Container>
          <TwoThirds>
            <Policy data={policy} />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

PolicyPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyPolicyPage: PropTypes.object,
  }),
};

export default PolicyPage;

export const PolicyPageQuery = graphql`
  query PolicyPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyPolicyPage(slug: { eq: $slug }) {
      pageName
      policy {
        ...PolicyFragment
      }
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
