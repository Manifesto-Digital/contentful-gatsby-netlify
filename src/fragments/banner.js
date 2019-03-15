import { graphql } from 'gatsby';

export const BannerTopicFragment = graphql`
  fragment BannerTopicFragment on ContentfulTopicBanner {
    id
    name
    headerText
    linkText
    link {
      ...LinkFragment
    }
    bannerColour
    internal {
      type
    }
    removeMarginBottom
  }
`;
