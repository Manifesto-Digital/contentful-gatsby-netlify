import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import Policy from '../components/policy';
import Assemblies from '../components/assemblies';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';

const PolicyPage = ({ data }) => {
  const {
    title,
    policy,
    pageInformation,
    assemblies,
  } = data.contentfulPagePolicy;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <TwoThirds>
            <Policy data={policy} />
            <Assemblies assemblies={assemblies} insideContainer />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

PolicyPage.propTypes = {
  data: PropTypes.shape({
    contentfulPagePolicy: PropTypes.object,
  }),
};

export default PolicyPage;

export const PolicyPageQuery = graphql`
  query PolicyPageTemplateQuery($slug: String!) {
    contentfulPagePolicy(slug: { eq: $slug }) {
      title
      policy {
        ...PolicyFragment
      }
      assemblies {
        ... on Node {
          ...CtaAssemblyFragment
          ...ShareBlockFragment
        }
      }

      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
