import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import Assemblies from '../components/assemblies';
import { Container, TwoThirds } from '../components/styled/containers';
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import FeedbackModal from '../components/feedback-modal';

const AdvicePage = ({ data }) => {
  const { assemblies, title, bodyCopy } = data.contentfulPageAssemblyAdvicePage;

  return (
    <Layout>
      <article>
        <PageTitle title={title} />
        <Container>
          <TwoThirds>
            {bodyCopy && <RichText richText={bodyCopy} />}
            <Assemblies assemblies={assemblies} insideContainer />
            <FeedbackModal />
          </TwoThirds>
        </Container>
      </article>
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
      bodyCopy {
        id
        internal {
          type
        }
        childContentfulRichText {
          html
        }
      }
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
          ...RelatedAdviceFragment
          ...ShareBlockFragment
        }
      }
    }
  }
`;
