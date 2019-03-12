import { graphql } from 'gatsby';

export const RichTextFragment = graphql`
  fragment RichTextFragment on ContentfulTopicSimpleRichTextBlock {
    id
    internal {
      type
    }
    text {
      childContentfulRichText {
        html
      }
    }
  }
`;
