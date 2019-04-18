import { graphql } from 'gatsby';

export const ShareBlockFragment = graphql`
  fragment ShareBlockFragment on ContentfulComponentShareBlock {
    id
    internal {
      type
    }
    headerText
    shareType
  }
`;
