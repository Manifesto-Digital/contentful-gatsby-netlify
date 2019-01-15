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
  } = data.contentfulPageAssemblyContentPage;

  return (
    <Layout>
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
    contentfulPageAssemblyContentPage: PropTypes.object,
  }),
};

export default Page;

export const pageQuery = graphql`
  query pageTemplateQuery($slug: String!) {
    contentfulPageAssemblyContentPage(slug: { eq: $slug }) {
      title
      heroContent {
        __typename
        ... on ContentfulTopicHeroNoCard {
          id
          title
          subtitle
          blackText
          image {
            ...ImageFragment
          }
        }
        ... on ContentfulTopicHeroWithCard {
          id
          title
          subtitle
          cardPosition
          image {
            ...ImageFragment
          }
          linkText
          internalLink {
            id
            slug
          }
          externalUrl
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
      assemblies {
        ... on Node {
          ...CtaAssemblyFragment
          ...ContentGrid4Fragment
          ...BannerTopicFragment
          ...InlineCallout
          ...VideoTopicFragment
          ...DownloadBannerAssemblyFragment
          ...AdviceSearchBoxTopicFragment
          ...ShareBlockFragment
          ...LinkBoxFragment
          ...DonationBanner
        }
      }
    }
  }
`;
