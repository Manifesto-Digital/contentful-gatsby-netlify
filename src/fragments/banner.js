import { graphql } from 'gatsby';

export const BannerTopicFragment = graphql`
  fragment BannerTopicFragment on ContentfulTopicBanner {
    id
    name
    headerText
    linkText
    internalLink {
      id
      slug
      internal {
        type
      }
    }
    externalLink {
      id
      internal {
        type
      }
      URL
      newTab
    }
    bannerColour
    internal {
      type
    }
    removeMarginBottom
  }
`;
