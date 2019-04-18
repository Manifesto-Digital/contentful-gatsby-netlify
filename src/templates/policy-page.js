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
  const { title, policy, pageInformation } = data.contentfulPagePolicy;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
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
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
