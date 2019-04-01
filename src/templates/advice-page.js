import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import Assemblies from '../components/assemblies';
import {
  Container,
  TwoThirds,
  ContentWithSideBar,
  SideBar,
} from '../components/styled/containers';
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import FeedbackModal from '../components/feedback-modal';
import SubpageMenu from '../components/advice-page/subpage-menu';
import SubpagePagination from '../components/advice-page/subpage-pagination';
import SidebarAssemblies from '../components/assemblies/sidebar';
import BounceCard from '../components/bounce-card';

const AdvicePage = ({ data, pageContext }) => {
  const {
    assemblies,
    title,
    bodyCopy,
    sidebarAssemblies,
    displayBounceCard,
    pageInformation,
  } = data.contentfulPageAssemblyAdvicePage;
  const { subpages, slug } = pageContext;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <SubpageMenu subpages={subpages} activeSlug={slug} />
          <ContentWithSideBar>
            <TwoThirds>
              {bodyCopy && <RichText richText={bodyCopy} />}
              <Assemblies assemblies={assemblies} insideContainer />
              <FeedbackModal />
            </TwoThirds>
            <SideBar>
              {displayBounceCard && <BounceCard />}
              <SidebarAssemblies assemblies={sidebarAssemblies} />
            </SideBar>
          </ContentWithSideBar>
        </Container>
        <SubpagePagination subpages={subpages} activeSlug={slug} />
      </article>
    </Layout>
  );
};

AdvicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyAdvicePage: PropTypes.object,
  }),
  pageContext: PropTypes.object,
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
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...CtaAssemblyFragment
          ...ContentGrid4Fragment
          ...BannerTopicFragment
          ...InlineCallout
          ...VideoTopicFragment
          ...AdviceSearchBoxTopicFragment
          ...DownloadBannerAssemblyFragment
          ...LinkBoxFragment
          ...DonationBanner
          ...RelatedAdviceFragment
          ...ShareBlockFragment
          ...GoogleMapFragment
          ...RichTextFragment
        }
      }
      displayBounceCard
      sidebarAssemblies {
        ...SidebarFragment
      }
    }
  }
`;
