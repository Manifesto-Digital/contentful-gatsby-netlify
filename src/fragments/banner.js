import { graphql } from 'gatsby';

export const BannerComponentFragment = graphql`
  fragment BannerComponentFragment on ContentfulComponentBanner {
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
