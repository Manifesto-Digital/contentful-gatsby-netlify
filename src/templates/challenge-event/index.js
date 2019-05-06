import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import ChallengeTemplate from './template';

const ChallengeEventPage = ({ data }) => {
  const { pageInformation, event } = data.contentfulPageChallengeEvent;

  // Grab the information from the event reference
  const { eventName } = event;

  return (
    <Layout
      pageInformation={pageInformation}
      pageTitle={eventName}
      removeFooterMargin
    >
      <ChallengeTemplate data={data} />
    </Layout>
  );
};

ChallengeEventPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyChallengeEventPage: PropTypes.object,
  }),
};

export default ChallengeEventPage;

export const challengeEventPageQuery = graphql`
  query challengeEventPageQuery($slug: String!) {
    contentfulPageChallengeEvent(slug: { eq: $slug }) {
      heroImage {
        ...ImageFragment
      }
      backgroundVideo {
        file {
          url
        }
      }
      event {
        ...EventFragment
      }
      bannerButtonText
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...PerksListFragment
          ...TestimonialsAssemblyFragment
          ...TwoColumnTextAndImageBlockFragment
          ...CardsWithIconsFragment
          ...CtaAssemblyFragment
          ...DownloadBannerAssemblyFragment
          ...AssemblyFormFragment
          ...ContentGrid4Fragment
          ...DonationBanner
          ...GoogleMapFragment
          ...InlineCallout
          ...LinkBoxFragment
          ...ShareBlockFragment
          ...StatsFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
