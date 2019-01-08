import { graphql } from 'gatsby';

export const NavigationLinkBoxFragment = graphql`
  fragment NavigationLinkBoxFragment on ContentfulTopicNavigationLinkBox {
    id
    internal {
      type
    }
    headerText
    links {
      title
      slug
    }
  }
`;
