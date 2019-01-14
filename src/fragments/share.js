import { graphql } from 'gatsby';

export const ShareBlockFragment = graphql`
  fragment ShareBlockFragment on ContentfulTopicShareBlock {
    id
    internal {
      type
    }
  }
`;
