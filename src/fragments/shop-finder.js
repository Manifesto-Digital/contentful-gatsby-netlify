import { graphql } from 'gatsby';

export const ShopFinderFragment = graphql`
  fragment ShopFinderFragment on ContentfulComponentShopFinder {
    id
    internal {
      type
    }
    name
    titleText
    introText {
      childContentfulRichText {
        html
      }
    }
  }
`;
