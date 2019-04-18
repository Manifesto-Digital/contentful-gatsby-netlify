import { graphql } from 'gatsby';

export const VideoTopicFragment = graphql`
  fragment VideoTopicFragment on ContentfulTopicVideoEmbed {
    id
    name
    externalUrl
    title
    metaDescription
    bottomText {
      json
    }
    removeMarginBottom
    internal {
      type
    }
  }
`;
