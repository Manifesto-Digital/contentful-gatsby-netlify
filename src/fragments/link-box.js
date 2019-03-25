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
      ...LinkFragment
    }
  }
`;
