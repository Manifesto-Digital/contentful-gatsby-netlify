import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import Hero from '../components/hero';
import RichText from '../components/rich-text';
import Assemblies from '../components/assemblies';
// Styles
import { Container } from '../components/styled/containers';

const Page = ({ data }) => {
  const {
    bodyCopy,
    heroContent,
    assemblies,
    pageInformation,
    title,
  } = data.contentfulPageContent;
  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        {heroContent && <Hero content={heroContent[0]} />}
        <section>
          <Container>{bodyCopy && <RichText richText={bodyCopy} />}</Container>
        </section>
        <Assemblies assemblies={assemblies} />
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageContent: PropTypes.object,
  }),
};

export default Page;

export const pageQuery = graphql`
  query pageTemplateQuery($slug: String!) {
    contentfulPageContent(slug: { eq: $slug }) {
      title
      heroContent {
        ... on Node {
          ...HeroNoCardFragment
          ...DonationHeroFragment
          ...HeroWithCardFragment
        }
      }
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
          ...BannerComponentFragment
          ...InlineCallout
          ...VideoComponentFragment
          ...DownloadBannerAssemblyFragment
          ...AdviceSearchBoxComponentFragment
          ...ShareBlockFragment
          ...LinkBoxFragment
          ...RelatedAdviceFragment
          ...DonationBanner
          ...AssemblyFormFragment
          ...ContentCardBannerFragment
          ...PerksListFragment
          ...TestimonialsAssemblyFragment
          ...TwoColumnTextAndImageBlockFragment
          ...CardsWithIconsFragment
          ...GoogleMapFragment
          ...StatsFragment
          ...ServicesFinderFragment
          ...ShopFinderFragment
          ...PersonCollectionFragment
          ...RichTextFragment
          ...AccordionsFragment
        }
      }
    }
  }
`;
