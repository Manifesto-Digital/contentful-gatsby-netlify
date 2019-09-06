import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import Hero from '../components/hero';
import RichText from '../components/rich-text';
import Assemblies from '../components/assemblies';
import Breadcrumbs from '../components/breadcrumbs';
// Styles
import { Container } from '../components/styled/containers';

const Page = ({ data, pageContext }) => {
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
          <Container>
            <Breadcrumbs
              parentPages={pageContext.menuParent}
              currentTitle={title}
            />
            {bodyCopy && <RichText richText={bodyCopy} />}
          </Container>
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
  pageContext: PropTypes.object,
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

        json
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
          ...ContentCardBannerFragment
          ...FullWidthImageFragment
          ...TableFragment
        }
      }
    }
  }
`;
