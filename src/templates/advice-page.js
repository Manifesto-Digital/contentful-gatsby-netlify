import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import SubpageMenu from '../components/advice-page/subpage-menu';
import SubpagePagination from '../components/advice-page/subpage-pagination';

const AdvicePage = ({ data, pageContext }) => {
  const { subpages, slug } = pageContext;
  console.log('data', data); // Will be replaced once data has been used

  return (
    <Layout>
      <SubpageMenu subpages={subpages} activeSlug={slug} />
      <SubpagePagination subpages={subpages} activeSlug={slug} />
    </Layout>
  );
};

AdvicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyContentPage: PropTypes.object,
  }),
  pageContext: PropTypes.object,
};

export default AdvicePage;

export const advicePageQuery = graphql`
  query advicePageTemplateQuery($slug: String!) {
    contentfulPageAssemblyAdvicePage(slug: { eq: $slug }) {
      title
    }
  }
`;
