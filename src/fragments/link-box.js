import { graphql } from 'gatsby';

export const LinkBoxFragment = graphql`
  fragment LinkBoxFragment on ContentfulComponentLinkBox {
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
