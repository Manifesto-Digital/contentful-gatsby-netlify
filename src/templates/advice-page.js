import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import Assemblies from '../components/assemblies';
import { Container, TwoThirds } from '../components/styled/containers';
import PageTitle from '../components/page-title';

const AdvicePage = ({ data }) => {
  const { assemblies, title } = data.contentfulPageAssemblyAdvicePage;

  return (
    <Layout>
      <PageTitle title={title} />
      <Container>
        <TwoThirds>
          <Assemblies assemblies={assemblies} />
        </TwoThirds>
      </Container>
    </Layout>
  );
};

AdvicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyAdvicePage: PropTypes.object,
  }),
};

export default AdvicePage;

export const advicePageQuery = graphql`
  query advicePageTemplateQuery($slug: String!) {
    contentfulPageAssemblyAdvicePage(slug: { eq: $slug }) {
      title
      assemblies {
        ... on Node {
          ...CtaAssemblyFragment
          ...ContentGrid4Fragment
          ...BannerTopicFragment
          ...InlineCallout
          ...VideoTopicFragment
          ...DownloadBannerAssemblyFragment
          ...LinkBoxFragment
          ...DonationBanner
        }
      }
    }
  }
`;
