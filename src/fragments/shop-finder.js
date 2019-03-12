import { graphql } from 'gatsby';

export const ShopFinderFragment = graphql`
  fragment ShopFinderFragment on ContentfulTopicShopFinder {
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
