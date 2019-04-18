import { graphql } from 'gatsby';

export const PolicyFragment = graphql`
  fragment PolicyFragment on ContentfulTopicPolicy {
    id
    internal {
      type
    }
    policyName
    author
    publishDate
    displayDate
    summary {
      json
    }
    media {
      ...DownloadableFileFragment
    }
  }
`;
