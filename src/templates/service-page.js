import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import RichText from '../components/rich-text';
// Styles
import { Container } from '../components/styled/containers';

const ServicePage = ({ data }) => {
  const {
    title,
    service,
    mainBodyCopy,
    usefulInfoCopy,
  } = data.contentfulPageAssemblyServicePage;

  return (
    <Layout>
      <article>Hello world</article>
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyServicePage: PropTypes.object,
  }),
};

export default ServicePage;

export const servicePageQuery = graphql`
  query servicePageTemplateQuery($slug: String!) {
    contentfulPageAssemblyServicePage(slug: { eq: $slug }) {
      title
      service {
        ...ServiceTopicFragment
      }
      mainBodyCopy {
        childContentfulRichText {
          html
        }
      }
      usefulInfoCopy {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
