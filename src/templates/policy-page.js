import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import Policy from '../components/policy';
import Assemblies from '../components/assemblies';
import Breadcrumbs from '../components/breadcrumbs';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';

const PolicyPage = ({ data, pageContext }) => {
  const {
    title,
    policy,
    pageInformation,
    assemblies,
    createdAt,
    updatedAt,
    internal,
  } = data.contentfulPagePolicy;

  return (
    <Layout
      pageInformation={pageInformation}
      pageTitle={title}
      createdAt={createdAt}
      updatedAt={updatedAt}
      contentType={internal.type}
    >
      <article>
        <Container>
          <Breadcrumbs
            parentPages={pageContext.menuParent}
            currentTitle={title}
          />
        </Container>
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
  pageContext: PropTypes.object,
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
      updatedAt
      createdAt
      internal {
        type
      }
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
