import { graphql } from 'gatsby';

export const LinkBoxFragment = graphql`
  fragment LinkBoxFragment on ContentfulTopicLinkBox {
    id
    internal {
      type
    }
    headerText
    itemsPerRow
    links {
      ... on ContentfulTopicExternalLink {
        internal {
          type
        }
        title
        URL
        newTab
      }
      ... on ContentfulPageAssemblyContentPage {
        internal {
          type
        }
        title
        slug
      }
    }
  }
`;
