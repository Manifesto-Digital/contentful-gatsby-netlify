import { graphql } from 'gatsby';

export const RichTextFragment = graphql`
  fragment RichTextFragment on ContentfulComponentSimpleRichTextBlock {
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
